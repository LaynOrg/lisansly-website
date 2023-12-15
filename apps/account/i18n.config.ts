export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      header: {
        links: ["Anasayfa", "Ayarlar", "Plan"],
        buttons: {
          login: "Giriş Yap",
          register: "Kayıt Ol",
        },
      },
      name: {
        label: "Adınız",
        placeholder: "Adınızı girin",
        error: "Ad alanı zorunludur",
      },
      email: {
        label: "E-posta Adresiniz",
        placeholder: "E-posta adresinizi girin",
        error: "Geçersiz e-posta adresi",
      },
      password: {
        label: "Şifreniz",
        placeholder: "Şifrenizi girin",
        error: "Şifre en az 10 karakter olmalıdır",
      },
      confirmPassword: {
        label: "Şifrenizi Tekrar Girin",
        placeholder: "Şifrenizi tekrar girin",
        error: {
          match: "Şifreler eşleşmiyor",
          required: "Tekrar Şifre alanı zorunludur",
        },
      },
      or: "veya",
      register: {
        title: "Lisansly'e hoşgeldiniz!",
        description: "Başlamak için hesabınızı oluşturun.",
        providers: {
          google: "Google ile kayıt ol",
          gitHub: "GitHub ile kayıt ol",
        },
        button: "Kayıt Ol",
        409: "Bu e-posta adresi zaten kullanılıyor",
      },
      login: {
        title: "Lisansly'e tekrardan hoşgeldiniz!",
        description: "Kaldığınız yerden devam etmek için hesabınıza girin.",
        providers: {
          google: "Google ile giriş yap",
          gitHub: "GitHub ile giriş yap",
        },
        button: "Giriş Yap",
        401: "Yanlış e-posta adresi veya şifre",
      },
      500: "Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.",
    },
    en: {
      header: {
        links: ["Home", "Settings", "Plan"],
        buttons: {
          login: "Login",
          register: "Register",
        },
      },
      name: {
        label: "Name",
        placeholder: "Enter your name",
        error: "Name is required",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        error: "Invalid email address",
      },
      password: {
        label: "Password",
        placeholder: "Enter your password",
        error: "Password must be at least 10 characters",
      },
      confirmPassword: {
        label: "Confirm Password",
        placeholder: "Confirm your password",
        error: {
          match: "Passwords do not match",
          required: "Confirm Password is required",
        },
      },
      or: "or",
      register: {
        title: "Welcome to Lisansly!",
        description: "Create your account to get started.",
        providers: {
          google: "Register with Google",
          gitHub: "Register with GitHub",
        },
        button: "Register",
        409: "This email address is already in use",
      },
      login: {
        title: "Welcome back to Lisansly!",
        description: "Login to continue where you left off.",
        providers: {
          google: "Login with Google",
          gitHub: "Login with GitHub",
        },
        button: "Login",
        401: "Incorrect email address or password",
      },
      500: "Something went wrong. Please try again later.",
    },
  },
}));
