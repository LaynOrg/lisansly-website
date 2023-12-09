export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      header: {
        links: ["Anasayfa", "Dokümantasyon", "Fiyatlandırma", "Panel"],
      },
      notificationBarLabel: "You can change the language of the site.",
      home: {
        heroHeader: {
          title:
            "Lisansly ile uygulamanıza Lisans veya Kimlik doğrulama ekleyin",
          description:
            "Uygulamalarınıza kimlik doğrulama eklemenin kolay ve uygun maliyetli yolu.",
          learnMore: "Öğrenmeye Başlayın",
          start: "Ücretsiz Plan ile Başlayın",
        },
        features: {
          title: "Özellikler",
          description: "İşte sizin için sunduğumuz bazı özellikler.",
          contents: [
            {
              title: "Çeşitlilik ve Yönetim",
              description:
                "Projemiz farklı ihtiyaçlarınıza uyacak esnek lisanslama seçenekleri sunmaktadır. Lisans anahtarlarınızı kullanıcı dostu bir kontrol paneli aracılığıyla yönetebilirsiniz.",
            },
            {
              title: "Entegrasyon",
              description:
                "SDK'lar uygulamanıza kolay entegrasyon edebilecek şekilde tasarlanmıştır. Entegrasyona yardımcı olmak için dokümantasyon sağlanmıştır.",
            },
            {
              title: "Maliyet",
              description:
                "Ücretsiz olarak kullanabilir veya ücretli bir plan seçebilirsiniz. Projemizi denemeniz için sınırlı özelliklere sahip ücretsiz bir plan sunuyoruz. Ücretli planlar daha fazla özellik ve avantaj sunar.",
            },
          ],
        },
      },
    },
    en: {
      header: {
        links: ["Home", "Documantation", "Pricing", "Dashboard"],
      },
      notificationBarLabel: "Sitenin dilini değiştirebilirsiniz.",
      home: {
        heroHeader: {
          title:
            "Add License or Authentication to your application with Lisansly",
          description:
            "An easy and inexpensive way to add authentication to your application.",
          learnMore: "Start Learning",
          start: "Start with Free Plan",
        },
        features: {
          title: "Features",
          description: "Here are some features we offer for you.",
          contents: [
            {
              title: "Diversity and Management",
              description:
                "Our project offers flexible licensing options to suit your different needs. You can manage your license keys through a user-friendly control panel.",
            },
            {
              title: "Integration",
              description:
                "SDKs are designed to easily integrate into your application. Documentation is provided to help with integration.",
            },
            {
              title: "Cost",
              description:
                "You can use it for free or choose a paid plan. We offer a free plan with limited features for you to try our project. Paid plans offer more features and advantages.",
            },
          ],
        },
      },
    },
  },
}));
