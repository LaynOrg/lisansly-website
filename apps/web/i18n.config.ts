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
        licensingOptions: {
          title:
            "Uygulamanıza entegre edeceğiniz lisanslama seçeneğini belirleyin.",
          options: [
            {
              title: "Bulut tabanlı lisanslama",
              description:
                "Bulut tabanlı lisanslama seçeneği ile kullanıcılarınızın lisanslarını yönetebilirsiniz.",
            },
            {
              title: "Hesap tabanlı lisanslama",
              description:
                "Hesap tabanlı lisanslama seçeneği ile kullanıcılarınızın lisanslarını yönetebilirsiniz.",
            },
          ],
          moreInfo: "Daha fazla bilgi",
        },
        dashboard: {
          title: "Hazırsanız bir proje oluşturarak başlayalım.",
          button: "Panele Git",
        },
        openSourceAndCommunity: {
          title: "Açık Kaynak ve Topluluk",
          description:
            "Lisansly açık kaynak kodlu bir projedir, kaynak kodunu github üzerinden bulabilir ve projeye katkıda bulunabilirsiniz. Sorularınız varsa discord veya twitter üzerinden sorabilirsiniz.",
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
        licensingOptions: {
          title:
            "Select the licensing option you will integrate into your application.",
          options: [
            {
              title: "Cloud-based licensing",
              description:
                "You can manage your users licenses with the cloud-based licensing option.",
            },
            {
              title: "Account-based licensing",
              description:
                "You can manage your users licenses with the account-based licensing option.",
            },
          ],
          moreInfo: "More information",
        },
        dashboard: {
          title: "If you are ready, let's start by creating a project.",
          button: "Go to Dashboard",
        },
        openSourceAndCommunity: {
          title: "Open Source and Community",
          description:
            "Lisansly is a open source project, you can find the source code on github and contribute to the project. If you have any questions, you can ask them on discord or twitter.",
        },
      },
    },
  },
}));
