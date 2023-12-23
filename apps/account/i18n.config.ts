export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      header: {
        links: ["Anasayfa", "Bilgiler", "Şifre Değiştir", "Plan"],
        buttons: {
          login: "Giriş Yap",
          register: "Kayıt Ol",
        },
      },
      name: {
        label: "Adınız",
        placeholder: "Adınızı girin",
        validation: {
          required:
          "Ad alanı zorunludur"},
      },
      email: {
        label: "E-posta Adresiniz",
        placeholder: "E-posta adresinizi girin",
        validation: {
          format: "Geçersiz e-posta adresi",
          required: "E-posta alanı zorunludur",
        },
      },
      password: {
        label: "Şifreniz",
        placeholder: "Şifrenizi girin",
        validation: {
          required: "Şifre alanı zorunludur",
          minLength: "Şifre en az 10 karakter olmalıdır",
        }
      },
      confirmPassword: {
        label: "Şifrenizi Tekrar Girin",
        placeholder: "Şifrenizi tekrar girin",
        validation: {
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
      updateInfos: {
        200: "Bilgileriniz başarıyla güncellendi",
        409: "Bu e-posta adresi zaten kullanılıyor",
        button: "Bilgileri Güncelle",
      },
      updatePassword: {
        200: "Şifreniz başarıyla güncellendi",
        button: "Şifreyi Güncelle",
      },
      500: "Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.",
    },
    en: {
      header: {
        links: ["Home", "Infos", "Change Password", "Plan"],
        buttons: {
          login: "Login",
          register: "Register",
        },
      },
      name: {
        label: "Name",
        placeholder: "Enter your name",
        validation: {
          required: "Name is required",
        },
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        validation: {
          format: "Invalid email address",
          required: "Email is required",
        },
      },
      password: {
        label: "Password",
        placeholder: "Enter your password",
        validation: {
          required: "Password is required",
          minLength: "Password must be at least 10 characters long",
        },
      },
      confirmPassword: {
        label: "Confirm Password",
        placeholder: "Confirm your password",
        validation: {
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
      updateInfos: {
        200: "Your infos have been successfully updated",
        409: "This email address is already in use",
        button: "Update Infos",
      },
      updatePassword: {
        200: "Your password has been successfully updated",
        button: "Update Password",
      },
      500: "Something went wrong. Please try again later.",
    },
  },
}));
