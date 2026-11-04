
<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { Eye, EyeOff, Check, X } from "lucide-vue-next";

const toast = useToast();
const router = useRouter();

const { setAuth } = useAuth();
const buildAuthUrl = useAuthUrl();

const isLogin = ref(true);
const error = ref("");

const email = ref("");
const password = ref("");
const rePassword = ref("");
const firstName = ref("");
const lastName = ref("");
const phone = ref("");

const loginLoading = ref(false);
const signupLoading = ref(false);
const resendLoading = ref(false);

const showPassword = ref(false);
const showRePassword = ref(false);

// Signup field validation
type SignupField =
  | "firstName"
  | "lastName"
  | "phone"
  | "email"
  | "password"
  | "rePassword";

const signupFields: SignupField[] = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "password",
  "rePassword",
];

const fieldErrors = reactive<Record<SignupField, string>>({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  rePassword: "",
});

const touched = reactive<Record<SignupField, boolean>>({
  firstName: false,
  lastName: false,
  phone: false,
  email: false,
  password: false,
  rePassword: false,
});

// Live password requirements
const passwordChecks = computed(() => ({
  length: password.value.length >= 8,
  lowercase: /[a-z]/.test(password.value),
  uppercase: /[A-Z]/.test(password.value),
  number: /[0-9]/.test(password.value),
  special: /[^A-Za-z0-9]/.test(password.value),
}));

const passwordIsStrong = computed(() =>
  Object.values(passwordChecks.value).every(Boolean)
);

const validateField = (field: SignupField): boolean => {
  let message = "";

  switch (field) {
    case "firstName":
    case "lastName": {
      const value =
        field === "firstName"
          ? firstName.value.trim()
          : lastName.value.trim();

      const label = field === "firstName" ? "First name" : "Last name";

      if (!value) {
        message = `${label} is required.`;
      } else if (value.length < 2) {
        message = `${label} must be at least 2 characters.`;
      } else if (value.length > 50) {
        message = `${label} must not exceed 50 characters.`;
      } else if (!/^[\p{L}\p{M}][\p{L}\p{M}\s'-]*$/u.test(value)) {
        message =
          `${label} can contain letters, spaces, hyphens, and apostrophes only.`;
      }

      break;
    }

    case "phone": {
      const value = phone.value.trim();

      if (!value) {
        message = "Phone number is required.";
      } else if (!/^[6-9]\d{9}$/.test(value)) {
        message =
          "Enter a valid 10-digit mobile number starting with 6–9.";
      }

      break;
    }

    case "email": {
      const value = email.value.trim();

      if (!value) {
        message = "Email address is required.";
      } else if (
        value.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        message = "Enter a valid email address.";
      }

      break;
    }

    case "password": {
      if (!password.value) {
        message = "Password is required.";
      } else if (password.value.length < 8) {
        message = "Password must be at least 8 characters.";
      } else if (password.value.length > 128) {
        message = "Password must not exceed 128 characters.";
      } else if (!/[a-z]/.test(password.value)) {
        message = "Include at least one lowercase letter.";
      } else if (!/[A-Z]/.test(password.value)) {
        message = "Include at least one uppercase letter.";
      } else if (!/[0-9]/.test(password.value)) {
        message = "Include at least one number.";
      } else if (!/[^A-Za-z0-9]/.test(password.value)) {
        message = "Include at least one special character.";
      }

      break;
    }

    case "rePassword": {
      if (!rePassword.value) {
        message = "Please confirm your password.";
      } else if (password.value !== rePassword.value) {
        message = "Passwords do not match.";
      }

      break;
    }
  }

  fieldErrors[field] = message;
  return !message;
};

// Validate after a field has been touched.
// Once a field has an error, typing can clear or update it.
const handleFieldInput = (field: SignupField) => {
  if (touched[field]) {
    validateField(field);
  }

  // Changing the password may also affect confirmation.
  if (field === "password" && touched.rePassword) {
    validateField("rePassword");
  }
};

const handleFieldBlur = (field: SignupField) => {
  touched[field] = true;
  validateField(field);
};

const validateSignup = (): boolean => {
  signupFields.forEach((field) => {
    touched[field] = true;
    validateField(field);
  });

  return signupFields.every((field) => !fieldErrors[field]);
};

const clearSignupValidation = () => {
  signupFields.forEach((field) => {
    fieldErrors[field] = "";
    touched[field] = false;
  });
};

const switchMode = (login: boolean) => {
  isLogin.value = login;
  error.value = "";
  showPassword.value = false;
  showRePassword.value = false;
  clearSignupValidation();
};

const getApiErrorMessage = (
  err: any,
  defaultMsg: string
): string => {
  return (
    err?.data?.message ||
    err?.response?._data?.message ||
    err?.message ||
    defaultMsg
  );
};

// Login
const handleLogin = async (e: Event) => {
  e.preventDefault();

  if (loginLoading.value) return;

  error.value = "";
  loginLoading.value = true;

  try {
    const res: any = await $fetch(buildAuthUrl("auth/login"), {
      method: "POST",
      body: {
        email: email.value.trim(),
        password: password.value,
      },
    });

    setAuth(res.data || res);
    toast.success(res.message || "Login successful!");
    await navigateTo("/");
  } catch (err: any) {
    error.value = getApiErrorMessage(
      err,
      "Invalid email or password"
    );
  } finally {
    loginLoading.value = false;
  }
};

// Resend verification email
const resendVerification = async () => {
  if (resendLoading.value || !email.value.trim()) return;

  resendLoading.value = true;

  try {
    const res: any = await $fetch(
      buildAuthUrl("auth/send-verification-email"),
      {
        method: "POST",
        body: {
          email: email.value.trim(),
        },
      }
    );

    toast.success(
      res.message || "Verification email sent successfully"
    );
  } catch (err: any) {
    toast.error(
      getApiErrorMessage(err, "Failed to send verification email")
    );
  } finally {
    resendLoading.value = false;
  }
};

// Signup
const handleSignup = async (e: Event) => {
  e.preventDefault();

  if (signupLoading.value) return;

  error.value = "";

  // Stop the API request if any field is invalid.
  if (!validateSignup()) {
    const firstInvalidField = signupFields.find(
      (field) => fieldErrors[field]
    );

    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
    }

    return;
  }

  signupLoading.value = true;

  try {
    const res: any = await $fetch(buildAuthUrl("auth/signup"), {
      method: "POST",
      body: {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        password: password.value,
        phone: phone.value.trim(),
      },
    });

    toast.success(
      res.message || "Account created! Please verify your email."
    );

    switchMode(true);

    firstName.value = "";
    lastName.value = "";
    phone.value = "";
    password.value = "";
    rePassword.value = "";
    email.value = "";
  } catch (err: any) {
    error.value = getApiErrorMessage(err, "Signup failed");
  } finally {
    signupLoading.value = false;
  }
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-white via-sky-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300"
  >
    <div
      class="w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-[0_20px_60px_rgba(14,165,233,0.18)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-sky-100 dark:border-slate-700 p-8"
    >
      <!-- Header -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-sky-700 dark:text-sky-400">
          Welcome to InfiCoreWare
        </h2>

        <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          Engineering Infinite Possibilities
        </p>
      </div>

      <!-- Login / Signup toggle -->
      <div
        class="flex justify-between bg-sky-50 dark:bg-slate-700/50 rounded-xl p-2 mb-6 border border-sky-100 dark:border-slate-600"
      >
        <button
          type="button"
          @click="switchMode(true)"
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            isLogin
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-gray-500 dark:text-gray-400 hover:text-sky-700 dark:hover:text-sky-300',
          ]"
        >
          Login
        </button>

        <button
          type="button"
          @click="switchMode(false)"
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            !isLogin
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300',
          ]"
        >
          Sign Up
        </button>
      </div>

      <!-- API-level errors -->
      <div
        v-if="error"
        role="alert"
        class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm p-3 rounded-lg mb-4"
      >
        <p class="text-center">{{ error }}</p>

        <button
          v-if="error.toLowerCase().includes('verify your email')"
          type="button"
          @click="resendVerification"
          :disabled="resendLoading"
          class="mt-3 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{
            resendLoading
              ? "Sending..."
              : "Resend Verification Email"
          }}
        </button>
      </div>

      <!-- LOGIN FORM -->
      <form
        v-if="isLogin"
        @submit="handleLogin"
        class="space-y-5"
        novalidate
      >
        <div>
          <label
            for="login-email"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Email
          </label>

          <input
            id="login-email"
            v-model="email"
            type="email"
            autocomplete="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-sky-500"
            required
          />
        </div>

        <div>
          <label
            for="login-password"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Password
          </label>

          <div class="relative">
            <input
              id="login-password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password"
              placeholder="Enter your password"
              class="w-full px-4 py-3 pr-12 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-sky-500"
              required
            />

            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition"
              aria-label="Toggle password visibility"
            >
              <Eye v-if="!showPassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          :disabled="loginLoading"
          class="w-full py-3 rounded-xl font-semibold bg-sky-600 text-white hover:bg-sky-700 transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ loginLoading ? "Logging in..." : "Login" }}
        </button>

        <div
          @click="router.push('/forget-password')"
          class="text-sm text-sky-600 dark:text-sky-400 cursor-pointer hover:underline text-right"
        >
          Forgot Password?
        </div>
      </form>

      <!-- SIGNUP FORM -->
      <form
        v-else
        @submit="handleSignup"
        class="space-y-5"
        novalidate
      >
        <!-- First name -->
        <div>
          <label
            for="firstName"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            First Name
          </label>

          <input
            id="firstName"
            v-model="firstName"
            type="text"
            autocomplete="given-name"
            maxlength="50"
            placeholder="Enter first name"
            :aria-invalid="!!fieldErrors.firstName"
            aria-describedby="firstName-error"
            @input="handleFieldInput('firstName')"
            @blur="handleFieldBlur('firstName')"
            :class="[
              'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
              fieldErrors.firstName
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 dark:border-slate-600 focus:border-blue-500',
            ]"
          />

          <p
            v-if="fieldErrors.firstName"
            id="firstName-error"
            class="mt-1.5 text-sm text-red-500"
            role="alert"
          >
            {{ fieldErrors.firstName }}
          </p>
        </div>

        <!-- Last name -->
        <div>
          <label
            for="lastName"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Last Name
          </label>

          <input
            id="lastName"
            v-model="lastName"
            type="text"
            autocomplete="family-name"
            maxlength="50"
            placeholder="Enter last name"
            :aria-invalid="!!fieldErrors.lastName"
            aria-describedby="lastName-error"
            @input="handleFieldInput('lastName')"
            @blur="handleFieldBlur('lastName')"
            :class="[
              'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
              fieldErrors.lastName
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 dark:border-slate-600 focus:border-blue-500',
            ]"
          />

          <p
            v-if="fieldErrors.lastName"
            id="lastName-error"
            class="mt-1.5 text-sm text-red-500"
            role="alert"
          >
            {{ fieldErrors.lastName }}
          </p>
        </div>

        <!-- Phone number -->
        <div>
          <label
            for="phone"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Phone Number
          </label>

          <input
            id="phone"
            v-model="phone"
            type="tel"
            inputmode="numeric"
            autocomplete="tel-national"
            maxlength="10"
            placeholder="9876543210"
            :aria-invalid="!!fieldErrors.phone"
            aria-describedby="phone-hint phone-error"
            @input="handleFieldInput('phone')"
            @blur="handleFieldBlur('phone')"
            :class="[
              'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
              fieldErrors.phone
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 dark:border-slate-600 focus:border-blue-500',
            ]"
          />

          <p
            id="phone-hint"
            class="mt-1 text-xs text-gray-500 dark:text-gray-400"
          >
            Enter 10 digits, starting with 6, 7, 8, or 9.
          </p>

          <p
            v-if="fieldErrors.phone"
            id="phone-error"
            class="mt-1.5 text-sm text-red-500"
            role="alert"
          >
            {{ fieldErrors.phone }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label
            for="signup-email"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Email
          </label>

          <input
            id="signup-email"
            v-model="email"
            type="email"
            autocomplete="email"
            maxlength="254"
            placeholder="Enter your email"
            :aria-invalid="!!fieldErrors.email"
            aria-describedby="signup-email-error"
            @input="handleFieldInput('email')"
            @blur="handleFieldBlur('email')"
            :class="[
              'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
              fieldErrors.email
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 dark:border-slate-600 focus:border-blue-500',
            ]"
          />

          <p
            v-if="fieldErrors.email"
            id="signup-email-error"
            class="mt-1.5 text-sm text-red-500"
            role="alert"
          >
            {{ fieldErrors.email }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <label
            for="signup-password"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Password
          </label>

          <div class="relative">
            <input
              id="signup-password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              autocomplete="new-password"
              maxlength="128"
              placeholder="Create a strong password"
              :aria-invalid="!!fieldErrors.password"
              aria-describedby="password-rules signup-password-error"
              @input="handleFieldInput('password')"
              @blur="handleFieldBlur('password')"
              :class="[
                'w-full px-4 py-3 pr-12 rounded-xl bg-white dark:bg-slate-700 border text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
                fieldErrors.password
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 dark:border-slate-600 focus:border-blue-500',
              ]"
            />

            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition"
              aria-label="Toggle password visibility"
            >
              <Eye v-if="!showPassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>

          <!-- Live password requirements -->
          <div
            id="password-rules"
            class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 space-y-2"
          >
            <p class="text-xs font-semibold text-gray-600 dark:text-gray-300">
              Password must contain:
            </p>

            <div
              v-for="rule in [
                { key: 'length', label: 'At least 8 characters' },
                { key: 'lowercase', label: 'One lowercase letter (a-z)' },
                { key: 'uppercase', label: 'One uppercase letter (A-Z)' },
                { key: 'number', label: 'One number (0-9)' },
                { key: 'special', label: 'One special character (!@#$...)' },
              ]"
              :key="rule.key"
              class="flex items-center gap-2 text-xs"
              :class="
                passwordChecks[rule.key as keyof typeof passwordChecks]
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-500 dark:text-gray-400'
              "
            >
              <Check
                v-if="passwordChecks[rule.key as keyof typeof passwordChecks]"
                class="w-4 h-4 shrink-0"
              />
              <X v-else class="w-4 h-4 shrink-0" />

              <span>{{ rule.label }}</span>
            </div>
          </div>

          <p
            v-if="fieldErrors.password"
            id="signup-password-error"
            class="mt-1.5 text-sm text-red-500"
            role="alert"
          >
            {{ fieldErrors.password }}
          </p>
        </div>

        <!-- Confirm password -->
        <div>
          <label
            for="confirm-password"
            class="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Confirm Password
          </label>

          <div class="relative">
            <input
              id="confirm-password"
              v-model="rePassword"
              :type="showRePassword ? 'text' : 'password'"
              autocomplete="new-password"
              maxlength="128"
              placeholder="Confirm your password"
              :aria-invalid="!!fieldErrors.rePassword"
              aria-describedby="confirm-password-error"
              @input="handleFieldInput('rePassword')"
              @blur="handleFieldBlur('rePassword')"
              :class="[
                'w-full px-4 py-3 pr-12 rounded-xl bg-white dark:bg-slate-700 border text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
                fieldErrors.rePassword
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 dark:border-slate-600 focus:border-blue-500',
              ]"
            />

            <button
              type="button"
              @click="showRePassword = !showRePassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition"
              aria-label="Toggle confirm password visibility"
            >
              <Eye v-if="!showRePassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>

          <p
            v-if="fieldErrors.rePassword"
            id="confirm-password-error"
            class="mt-1.5 text-sm text-red-500"
            role="alert"
          >
            {{ fieldErrors.rePassword }}
          </p>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="signupLoading"
          class="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{
            signupLoading
              ? "Creating account..."
              : "Sign Up"
          }}
        </button>
      </form>
    </div>
  </div>
</template>
