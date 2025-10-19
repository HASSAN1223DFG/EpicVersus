// characters.js
// ملف بيانات الشخصيات: يحتوي على 20 شخصية لكل قسم.
// كل شخصية تملك الحقول: name, image, power, speed, intelligence, superpower, notes, pros, cons
var characters = {
  "marvel": [
    {
      "name":"Iron Man",
      "image":"images/ironman.jpg",
      "power":90,"speed":85,"intelligence":100,
      "superpower":"Powered Armor Suit (Repulsors, Flight, AI)",
      "notes":["توني ستارك عبقري هندسي","أحد مؤسسي الأفنجرز","ضحى بنفسه في أحداث كبرى","يعتمد على التكنولوجيا","تطوّر شخصيًا عبر السلسلة"],
      "pros":["ذكاء هندسي عالي","بدلة متعددة الاستخدامات","قيادي تكتيكي","ابتكار مستمر","موارد هائلة"],
      "cons":["يعتمد على البدلة","مشاكل شخصية وعاطفية","عرضة للهجمات الإلكترونية","غرور أحيانًا","يتأثر بالإرهاق النفسي"]
    },
    {
      "name":"Thor",
      "image":"images/thor.jpg",
      "power":100,"speed":80,"intelligence":78,
      "superpower":"Godlike Strength & Control of Lightning (Mjolnir/Stormbreaker)",
      "notes":["ابن أودين وإله الرعد","قوة بدنية هائلة","قادر على السفر بين العوالم","قائد محارب","تطوّر داخلي وعاطفي"],
      "pros":["قوة بدنية خارقة","تحكم بالعناصر","تحمل هائل","خبرة قتالية","قيادي"],
      "cons":["اندفاعي","أحيانًا يعتمد على السلاح","قلة التخطيط التكتيكي في بعض المواقف","يمكن استنزافه","حساس لخسارة الشرف"]
    },
    {
      "name":"Captain America",
      "image":"images/captain.jpg",
      "power":88,"speed":82,"intelligence":84,
      "superpower":"Super Soldier Serum & Tactical Mastery",
      "notes":["ستيف روجرز بطل أخلاقي","رمز للقيادة","يمتلك درعًا فريدًا","قائد ميداني","قيمة تمثيلية كبيرة"],
      "pros":["قدرة تحمل عالية","مهارات قتال متقدمة","قائد تكتيكي","قيمة معنوية","دقة في التوقيت"],
      "cons":["ليس خارقاً كليًا","تعتمد فعاليته على التدريب","قد يستغل تمسكه بالقيم","عرضة للأسلحة المتطورة","حدود القوة البدنية"]
    },
    {
      "name":"Hulk",
      "image":"images/hulk.jpg",
      "power":100,"speed":70,"intelligence":60,
      "superpower":"Rage-fueled Strength & Durability",
      "notes":["بروس بانر يتحول إلى هالك","القوة تزداد بالغضب","قد يصبح خطرًا للحلفاء","تحمل غير عادي","قد يفتقد للسيطرة"],
      "pros":["قوة هائلة","تحمل وصمود","قدرة على تغيير مجريات القتال","تأثير نفسي على الأعداء","سرعة انفجارية للحركات"],
      "cons":["صعوبة بالتحكم","ذكاء أقل في الحالة الهولكية","ممكن أن يهاجم الحلفاء","قابل للاستدراج","يعاني من تبعات أخلاقية"]
    },
    {
      "name":"Doctor Strange",
      "image":"images/strange.jpg",
      "power":96,"speed":72,"intelligence":98,
      "superpower":"Mastery of Mystic Arts & Time Manipulation",
      "notes":["حارس البعد الأرضي","يستخدم التعاويذ والأبعاد","يمتلك فهمًا للفلك والأكوان","قد يتعامل مع مخاطر كونية","دور دفاعي واستراتيجي"],
      "pros":["تعاويذ قوية ومتنوعة","قدرة على التلاعب بالوقت","دفاعات بُعدية","ذكاء تكتيكي","إمكانية إنقاذ مواقف مستحيلة"],
      "cons":["تعتمد بعض القوى على أدوات","تعقيد الاستخدام قد يسبب أخطاء","قد يتعرض للإرهاق الروحي","محدودية في الاشتباك الجسدي","خطر الاختراق البعدي"]
    },
    {
      "name":"Spider-Man",
      "image":"images/spiderman.jpg",
      "power":86,"speed":92,"intelligence":88,
      "superpower":"Spider-Sense, Agility & Wall-Crawling",
      "notes":["بيتر باركر صاحب حس أخلاقي قوي","حاسة عنكبوتية تحذيرية","ماهر بالاختراعات","شاب يوازِن بين الحياة والبطولة","شعبية كبيرة"],
      "pros":["سرعة وردود فعل فائقة","حاسة تحذيرية","مرونة وابتكار","روح تضحية","مهارات تسلق"],
      "cons":["عرضة للضربات القوية","مسؤوليات مدنية تضغط عليه","تعتمد فعاليته على معدات الويب","عرضة للخداع عاطفيًا","قد يتأثر بعائلته"]
    },
    {
      "name":"Black Panther",
      "image":"images/panther.jpg",
      "power":90,"speed":86,"intelligence":92,
      "superpower":"Vibranium Suit & Enhanced Senses",
      "notes":["ملك واكاندا وحامي شعبه","تقنية متقدمة خلف قوته","مقاتل تكتيكي","دمج بين التقليدي والتقني","استراتيجيات وطنية"],
      "pros":["دروع متطورة","مهارات قتالية ممتازة","ذكاء استراتيجي","سرعة وردود فعل","دعم موارد وطنية"],
      "cons":["مسؤوليات سياسية تعيقه","يمكن استهداف بلده","اعتماد على الموارد","هجمات تكنولوجية قد تضعفه","عرضة للانتقام السياسِي"]
    },
    {
      "name":"Ant-Man",
      "image":"images/antman.jpg",
      "power":78,"speed":80,"intelligence":86,
      "superpower":"Size Manipulation (Pym Particles) & Ant Control",
      "notes":["يستخدم جسيمات بايم للتصغير والتكبير","يستفيد من تكتيكات غير تقليدية","قيمة في المهمات الاستخبارية","مفيد في التخريب والتسلل","مهارات هندسية"],
      "pros":["قدرة على التخفي","تكتيكات غير متوقعة","ذكاء هندسي","قيمة استخباراتية","قدرة على المناورة"],
      "cons":["تعتمد القدرات على التكنولوجيا","قوة هجومية محدودة في بعض الأوضاع","عرضة للتشويش التكنولوجي","مشكلات تنسيق مع فرق تقليدية","تعرض لخطر عند التكبير المفاجئ"]
    },
    {
      "name":"Loki",
      "image":"images/loki.jpg",
      "power":88,"speed":74,"intelligence":96,
      "superpower":"Illusion, Magic & Shapeshifting",
      "notes":["إله الخداع","مخطط متعدد الطبقات","قد يتقلب الولاء","ماهر في الخداع والمكر","قوة تحوّل الشكل"],
      "pros":["مهارة خداع عالية","ذكاء تخطيطي","قدرة على استغلال نقاط الضعف","سحر متنوع","مرونة في الأدوار"],
      "cons":["غرور وميل للخطأ","قابل للفضح أمام قوى أكبر","موثوقية متقلبة","يمكن استغلال ماضيه","أحيانًا متهور عاطفيًا"]
    },
    {
      "name":"Thanos",
      "image":"images/thanos.jpg",
      "power":100,"speed":68,"intelligence":90,
      "superpower":"Titan Strength & (with Infinity Stones) Cosmic Power",
      "notes":["قوة إرادة حازمة","محاولات لتغيير الكون","قوة بدنية كبيرة","قيادي استراتيجي","حكم مبني على فلسفة مؤلمة"],
      "pros":["قوة بدنية هائلة","عزيمة لا تتزعزع","ذكاء استراتيجي","قدرة على قيادة القوات","تهديد كوني مع الأحجار"],
      "cons":["اعتماد على الأدوات لتحقيق الأثر","قواعد أخلاقية مشوّهة","قابل للاستدراج عندما يخطئ","التعامل مع فرق متحده قد يهزمه","عاطفة خفية يمكن استغلالها"]
    },
    {
      "name":"Scarlet Witch",
      "image":"images/scarlet.jpg",
      "power":99,"speed":82,"intelligence":92,
      "superpower":"Reality Manipulation & Chaos Magic",
      "notes":["قادرة على تغيير الواقع","مشاعرها مرتبطة بقوتها","تسببت بأحداث كبرى عند فقدان السيطرة","قوة سحرية نادرة","قيمة تكتيكية هائلة"],
      "pros":["تأثير على الواقع","قوة هجومية ودفاعية كبيرة","قدرة استراتيجية","قيمة في النزاعات الكونية","إمكانات لإعادة تشكيل المواجهات"],
      "cons":["تأثر عاطفي يؤدي لفقدان السيطرة","تعقيد القوى يجعل السيطرة صعبة","خطورة الاستخدام العشوائي","حالة نفسية مؤثرة على الأداء","قابلية للتلاعب النفسي"]
    },
    {
      "name":"Vision",
      "image":"images/vision.jpg",
      "power":96,"speed":84,"intelligence":95,
      "superpower":"Synthezoid Physic & Solar Mind Gem",
      "notes":["كيان اصطناعي وذكي","مزيج بين التقنية والضمير","قدرات دفاعية وهجومية متقدمة","دور عاطفي مع Wanda","قيمة تحليلية عالية"],
      "pros":["ذكاء عالي","قدرة على الاختراق والمرور عبر المادة","تحمل قوي","دمج التقنية والوعي","قدرة دفاعية"],
      "cons":["اعتماد على التكنولوجيا","معرض للاختراق","قضايا عاطفية تؤثر عليه","يمكن تعطيله عبر مصادر طاقة","حساسية للسياق"]
    },
    {
      "name":"Hawkeye",
      "image":"images/hawkeye.jpg",
      "power":72,"speed":78,"intelligence":80,
      "superpower":"Master Archer & Precision",
      "notes":["دقة بالأسهم عالية","مقاتل ميداني تكتيكي","لا قوى خارقة لكنه فاعل","استخدام أسهم متخصصة","قيمة تكتيكية للفريق"],
      "pros":["دقة واحتراف","مهارات تكتيكية","مرونة في العمل الفردي والجماعي","سرعة رد فعل","تدريب بدني ممتاز"],
      "cons":["لا قوى خارقة","عرضة للهجمات القوية عن قرب","تعتمد فعاليته على العتاد","عرضة للإرهاق","اعتماده على الدقة"]
    },
    {
      "name":"Falcon",
      "image":"images/falcon.jpg",
      "power":76,"speed":84,"intelligence":78,
      "superpower":"Flight (Jet Pack) & Aerial Combat",
      "notes":["يتقن القتال الجوي","جناح تكنولوجي متقدم","قيمة في التغطية الجوية","شريك تكتيكي مهم","قد يتطور إلى قائد"],
      "pros":["تفوق جوي","تنقل سريع","تغطية واسعة","دعم هجوم/دفاع","مرونة في المهمات"],
      "cons":["اعتماد على العتاد الجوي","عرضة للتشويش الإلكتروني","ضعيف في القتال القريب بدون معدات","مصادر الطاقة قد تتعطل","التعرض لهجمات مضادة جويًا"]
    },
    {
      "name":"Winter Soldier",
      "image":"images/winter.jpg",
      "power":85,"speed":80,"intelligence":80,
      "superpower":"Enhanced Soldier Abilities & Cybernetic Arm",
      "notes":["جندي معدل جسديًا","ذو خبرة قتالية واسعة","صراع هوية وماضي مظلم","قيمة استخباراتية","تكتيكي ميداني"],
      "pros":["مهارات قتالية محترفة","قدرة تحمل وإصابات","أدوات تكنولوجية","تخطيط تكتيكي","قدرة على العمل منفردًا"],
      "cons":["ماضٍ نفسي يؤثر عليه","قد يتعرض للسيطرة العقلية","اعتماد على المعدات","تعرض لصدمات عاطفية","ضعف أمام هجمات تقنية"]
    },
    {
      "name":"Gamora",
      "image":"images/gamora.jpg",
      "power":86,"speed":78,"intelligence":82,
      "superpower":"Peak Combatant & Assassin Skills",
      "notes":["أقوى مقاتلة في المجرة","تدريب قاتل","قوة هجومية عالية","تطورت أخلاقيًا","قيمة في المهمات القتالية"],
      "pros":["مهارات قتالية وخبرة","تحمل بدني عالي","سرعة ومهارة تكتيكية","شجاعة واستقلال","فعالة في القتال القريب"],
      "cons":["تاريخ مظلم يمكن استغلاله","عاطفة قد تؤثر على الحكم","تعتمد على التدريب","حساسية للتجارب الماضية","قابل للاستغلال عاطفيًا"]
    },
    {
      "name":"Rocket Raccoon",
      "image":"images/rocket.jpg",
      "power":74,"speed":82,"intelligence":94,
      "superpower":"Expert Tactician & Weapons Specialist",
      "notes":["خبير بالأسلحة والتفجيرات","ذكاء تكتيكي عالٍ","مخططات معقدة","روح مرحة ومتهورة أحيانًا","قيمة تكتيكية"],
      "pros":["ذكاء تقني","مهارة أسلحة","سرعة اتخاذ قرار","قدرة على التخطيط","مواجهة خصوم أقوى بالتخطيط"],
      "cons":["اعتماد على الدعم المادي","جسم صغير أمام قوة بدنية خارقة","كبرياء قد يؤدي لمشاكل","تكتيكات خطرة قد تعرضه","عرضة لإصابات بالمعارك المباشرة"]
    },
    {
      "name":"Drax",
      "image":"images/drax.jpg",
      "power":88,"speed":70,"intelligence":62,
      "superpower":"Super Strength & Durability",
      "notes":["محارب عدواني","قوة بدنية كبيرة","قيمة هجومية مباشرة","صراحة وانتقامية","قوة تحمل عالية"],
      "pros":["قوة بدنية عالية","تحمل وضربات مدمرة","لا خوف من المواجهة","قيمة هجومية","فعّال في القتال المباشر"],
      "cons":["ذكاء تكتيكي محدود","سهولة التعرض للخداع","قلة المرونة العقلية","اعتماد على القتال القريب","قابل للخطأ التكتيكي"]
    }
  ],

  "dc": [
    {
      "name":"Superman",
      "image":"images/superman.jpg",
      "power":100,"speed":98,"intelligence":88,
      "superpower":"Flight, Heat Vision, Super Strength, Invulnerability",
      "notes":["كلارك كينت من كريبتون","قوة شمسية خارقة","ضعيف أمام الكريبتونايت","رمز الأمل","قدرة هائلة على الإلهام"],
      "pros":["قوة وسرعة وتحمّل هائل","قدرة شفاء","قيادي أخلاقي","قيمة رمزية","قدرة على حماية العالم"],
      "cons":["حساسية للكريبتونايت","حساسية عاطفية","إمداد بالطاقة من الشمس","غالبًا متردد في قتل الخصم","عرضة للخداع القوي"]
    },
    {
      "name":"Batman",
      "image":"images/batman.jpg",
      "power":82,"speed":76,"intelligence":100,
      "superpower":"Peak Human Conditioning & Master Detective",
      "notes":["بروس واين عقل استراتيجي","لا قوى خارقة ولكنه يمتلك موارد وتقنية","خبير في التحري والتكتيك","مخاطره الشخصية دفعت به","قوة قلبية وعزيمة"],
      "pros":["ذكاء تكتيكي استثنائي","مهارات قتالية يدوية","موارد تقنية","قدرة تخفي وتجسس","تصميم لا يلين"],
      "cons":["إنساني — لا قوى خارقة","اعتماد على التكنولوجيا","مشاكل نفسية","عرضة للإصابة","قد يستنزف الموارد"]
    },
    {
      "name":"Flash",
      "image":"images/flash.jpg",
      "power":94,"speed":100,"intelligence":86,
      "superpower":"Super Speed & Speed Force Manipulation",
      "notes":["باري ألين سريع للغاية","السرعة تمكنه من السفر عبر الزمن أحيانًا","استخدام السرعة في التكتيك","قوة بحثية زمنية","تعقيدات مسؤولية زمنية"],
      "pros":["سرعة لا تضاهى","مناورة وتفادي فائق","هجوم بالسرعة","قدرات زمنية","ردود فعل فورية"],
      "cons":["اعتماد على الطاقة الزمنية","تعرض لتشويش السرعة","مشاكل في التحكم بالسرعة المطلقة","إجهاد جسدي/نفسي","عرضة لهجمات توقيتية"]
    },
    {
      "name":"Wonder Woman",
      "image":"images/wonderwoman.jpg",
      "power":95,"speed":86,"intelligence":86,
      "superpower":"Godlike Strength, Lasso of Truth & Combat Skill",
      "notes":["أمازون محاربة قوية","مبارزة ومهارات قتالية عالية","اللّاسو تجبر على قول الحقيقة","قيمة أخلاقية رمزية","قوة مستمرة في القتال القريب"],
      "pros":["قوة ومهارة قتالية","أسلحة سحرية فعالة","تحمل وروح نبيلة","قدرة على إلهام الآخرين","خبرة في المعارك التقليدية"],
      "cons":["قد تتأثر بالأسلحة السحرية","صلابة أخلاقية تحد من الخيارات","استهداف رمزي يزيد الخطر","تعتمد على التدريب القتالي","نادراً ما تستخدم القوة المدمرة سلفًا"]
    },
    {
      "name":"Aquaman",
      "image":"images/aquaman.jpg",
      "power":90,"speed":82,"intelligence":78,
      "superpower":"Marine Telepathy & Super Strength",
      "notes":["ملك أطلس","تحكم بالمخلوقات البحرية","قيادة سياسية","قوة بحريّة هائلة","دوره جيوسياسي مهم"],
      "pros":["تحكم بالمحيطات","قوة بدنية واستدامة","قدرة على القتال البحري والبرّي","قيادة سياسية","أسلحة بحرية قديمة"],
      "cons":["تعقيدات العلاقات السياسية","تعتمد قوته على البحر","تعرضه لتهديدات تقنية","قد يتأثر في البيئات الجافة","مواجهة تهديدات سطحية معقدة"]
    },
    {
      "name":"Cyborg",
      "image":"images/cyborg.jpg",
      "power":92,"speed":84,"intelligence":90,
      "superpower":"Cybernetic Enhancements & Technopathy",
      "notes":["نصف إنسان نصف آلة","تحكم بالشبكات والآلات","قيمة تقنية عالية","أداة للحرب التكنولوجية","قوة هجومية ودفاعية"],
      "pros":["تكيف تكنولوجي","أسلحة مدمجة","تحليل سريع","اختراق الأنظمة","تحمل في القتال"],
      "cons":["ممكن اختراقه إلكترونيًا","تعتمد قوته على وصيانته","مشاكل هوية","عرضة لموجات تعطيل","الحاجة للصيانة"]
    },
    {
      "name":"Green Lantern",
      "image":"images/lantern.jpg",
      "power":94,"speed":84,"intelligence":86,
      "superpower":"Power Ring Constructs & Willpower",
      "notes":["خاتم يعكس الإرادة","قدرة خلق أشكال بقوة الإرادة","جزء من فيلق مجري","قوة تعتمد على التركيز","إمكانات إبداعية هائلة"],
      "pros":["خلق أشكال متغيرة","مرونة إبداعية","قدرة دفاعية وهجومية","تدخل كوني","تغطية كبيرة"],
      "cons":["تتأثر بالضعف الإرادي","تعتمد على الشحن","حدود أمام قوى متفوقة","عرضة للتشويش النفسي","قيود تقنية للخاتم"]
    },
    {
      "name":"Shazam",
      "image":"images/shazam.jpg",
      "power":98,"speed":90,"intelligence":76,
      "superpower":"Magic Empowerment (Gods' Powers)",
      "notes":["يحصل على قوى عبر كلمة سحرية","تحول من طفل إلى بطل","قوة إلهية شابة","قيمة بطولية كبيرة","قدرة على المنافسة مع الكبار"],
      "pros":["قوة سحرية بدنية","سرعة ومناورة","تحمل ضد الأضرار","طاقة سحرية متنوعة","حيوية بطولية"],
      "cons":["اعتماد على الكلمة السحرية","قد يكون ساذجًا أخلاقيًا","تعرض لسلب السحر","تصرفات طفلية قد تسبب مشاكل","تعرض لقوى معاكسة"]
    },
    {
      "name":"Black Adam",
      "image":"images/blackadam.jpg",
      "power":99,"speed":86,"intelligence":82,
      "superpower":"Ancient Magic & Lightning-based Abilities",
      "notes":["قوة مشابهة لشازام لكن نهج عدائي","طاقة سحرية عنيفة","قدرة تدميرية كبيرة","قائد قوي","تهديد للأبطال"],
      "pros":["قوة مدمرة","سرعة عالية","مهارات قتالية","تحمل هائل","سحر عنيف"],
      "cons":["عدوانية قد تؤدي لعزلته","قد يتورط بالديكتاتورية","تعرض لمعارضة سياسية ودينية","تعتمد بعض القدرات الطقوس","منافسات كونية قد تكبح قوته"]
    },
    {
      "name":"Joker",
      "image":"images/joker.jpg",
      "power":60,"speed":70,"intelligence":96,
      "superpower":"Chaos Mastery & Psychological Warfare",
      "notes":["رمز الفوضى في جوثام","عقل مدبر تكتيكيًا","يستخدم الفوضى كسلاح","لا قوة بدنية خارقة لكنه خطر نفسي","قابل للتنبؤ أحيانًا"],
      "pros":["ذكاء نفسي وتحليل"] ,
      "cons":["عدم استقرار عقلي","يعتمد على التخطيط","يمكن التلاعب به"]
    },
    {
      "name":"Lex Luthor",
      "image":"images/lex.jpg",
      "power":64,"speed":60,"intelligence":100,
      "superpower":"Genius-level Intellect & Resources",
      "notes":["رجل أعمال وعبقري","منافس سوبرمان الفكري","يستخدم التقنية والأسلحة ضد الأبطال","قوة مالية وسياسية","مخطط استراتيجي"], 
      "pros":["ذكاء استثنائي","موارد تقنية ومالية","قدرة ابتكار"], 
      "cons":["لا قوة خارقة","غرور قد يوقعه بالأخطاء","تعتمد خططه على الموارد"]
    },
    {
      "name":"Harley Quinn",
      "image":"images/harley.jpg",
      "power":68,"speed":74,"intelligence":78,
      "superpower":"Acrobatics, Chaos & Unpredictability",
      "notes":["كانت طبيبة نفسية قبل تحوّلها","مهارات قتالية وحيوية","شخصية معقدة ومحفوفة بالمخاطر","تتصف بالتهور والمرونة"], 
      "pros":["خفة ومهارة قتالية","قدرة إيقاع نفسي بالخصم"], 
      "cons":["قابل للتلاعب عاطفيًا","ميل للتهور","تعتمد على الدعم"]
    },
    {
      "name":"Deathstroke",
      "image":"images/deathstroke.jpg",
      "power":92,"speed":90,"intelligence":92,
      "superpower":"Enhanced Physiology & Tactical Assassin Skills",
      "notes":["قاتل محترف ومرتزق","مهارات تسلح وقتال عالية","مدرّب على المهمات المستحيلة","تكتيكي محنّك"], 
      "pros":["تكتيكات قتل عالية","قوة تحمل ومهارات تسلح"], 
      "cons":["مرتزق بطبيعته","تعرض للمؤامرات المهنية","يحتاج لتخطيط مسبق"]
    },
    {
      "name":"Catwoman",
      "image":"images/catwoman.jpg",
      "power":76,"speed":88,"intelligence":86,
      "superpower":"Agility, Stealth & Expert Thief Skills",
      "notes":["متسللة محترفة","علاقة مع باتمان معقدة","مهارات اختطاف وجمع معلومات","سرعة وخفة"], 
      "pros":["سرعة ومهارة تسلل","قدرة على الاختباء والتنكر"], 
      "cons":["تعتمد على الخفة أكثر من القوة","عرضة للقتال المباشر"]
    },
    {
      "name":"Green Arrow",
      "image":"images/arrow.jpg",
      "power":78,"speed":78,"intelligence":82,
      "superpower":"Master Archer & Tactical Precision",
      "notes":["رامي سهم محترف","أسهم متخصصة متعددة الوظائف","قائد مستقل ميداني","رمز للعدالة الشعبية"], 
      "pros":["دقة بالأسلحة","مهارات تكتيكية"], 
      "cons":["لا قوة خارقة","تعتمد على المعدات"]
    }
  ],

  "harrypotter": [
    {
      "name":"Harry Potter",
      "image":"images/harry.jpg",
      "power":78,"speed":68,"intelligence":88,
      "superpower":"Expelliarmus & Patronus - Defensive Magic",
      "notes":["الناجي من لعنة أفادا كيدافرا","قائد جيش دمبلدور","يمتلك عصا فينيكس","واجه فولدمورت عدة مرات","قوة عاطفية هامة"],
      "pros":["شجاعة","مهارات دفاعية قوية","قائد"], "cons":["عاطفي بعض الشيء","يتسرع أحيانًا"]
    },
    {
      "name":"Voldemort",
      "image":"images/voldemort.jpg",
      "power":98,"speed":76,"intelligence":94,
      "superpower":"Avada Kedavra & Horcruxes - Dark Immortality",
      "notes":["اسمه توم ريدل","ابتكر الهوركروكسات","قوة سحر مظلمة هائلة","قائد الموتى","يخشا الموت"], 
      "pros":["سحر قوي","ذكاء تكتيكي"], "cons":["غرور","لا يفهم الحب"]
    },
    {
      "name":"Hermione Granger",
      "image":"images/hermione.jpg",
      "power":75,"speed":72,"intelligence":100,
      "superpower":"Exceptional Spell Knowledge & Time Turner (past)",
      "notes":["الأذكى في جيلها","خلفية علمية قوية","قيّمت إجابات مستمرة","أسست جيش دمبلدور"], 
      "pros":["ذكاء استثنائي","معرفة واسعة"], "cons":["تحب الكمال","توتر أحيانًا"]
    },
    {
      "name":"Ron Weasley",
      "image":"images/ron.jpg",
      "power":65,"speed":64,"intelligence":72,
      "superpower":"Strategic Support & Loyalty",
      "notes":["من عائلة ويزلي","مخلص لهاري وهرميون","مهارات تكتيكية داعمة"], 
      "pros":["ولاء","حس فكاهي"], "cons":["ثقة منخفضة بنفسه"]
    },
    {
      "name":"Albus Dumbledore",
      "image":"images/dumbledore.jpg",
      "power":99,"speed":60,"intelligence":99,
      "superpower":"Mastery of Magic & Leadership",
      "notes":["واحد من أقوى السحرة","قائد المقاومة","حكمة واسعة"], 
      "pros":["حكمة","سحر قوي"], "cons":["سرية مفرطة"]
    },
    {
      "name":"Severus Snape",
      "image":"images/snape.jpg",
      "power":88,"speed":62,"intelligence":96,
      "superpower":"Occlumency & Potions Mastery",
      "notes":["خبير في الجرعات","عميل مزدوج","قصة تضحية"], 
      "pros":["ذكاء تكتيكي","مهارات تعاويذ"], "cons":["انطوائي","قاسٍ"]
    },
    {
      "name":"Bellatrix Lestrange",
      "image":"images/bellatrix.jpg",
      "power":90,"speed":72,"intelligence":78,
      "superpower":"Extreme Dark Magic & Fanaticism",
      "notes":["أحد أتباع فولدمورت الأكثر ولاء","متخصصة بالسحر الأسود"], 
      "pros":["هجومية قوية"], "cons":["جنون متهور"]
    },
    {
      "name":"Sirius Black",
      "image":"images/sirius.jpg",
      "power":84,"speed":74,"intelligence":82,
      "superpower":"Animagus (Dog) & Escape skills",
      "notes":["تحول إلى كلب","هرب من أزكابان","ماضي معقد"], 
      "pros":["شجاعة","ولاء"], "cons":["اندفاعي"]
    },
    {
      "name":"Draco Malfoy",
      "image":"images/draco.jpg",
      "power":66,"speed":64,"intelligence":74,
      "superpower":"Cunning & Pure-blood Resources",
      "notes":["من عائلة مالفوي","تغير عبر السلسلة"], 
      "pros":["ذكاء استراتيجي"], "cons":["غرور"]
    },
    {
      "name":"Minerva McGonagall",
      "image":"images/mcgonagall.jpg",
      "power":88,"speed":68,"intelligence":94,
      "superpower":"Transfiguration Mastery & Leadership",
      "notes":["أستاذة التحويل","قائدة صلبة","حكمة"], 
      "pros":["قيادة","مهارة سحرية"], "cons":["صارمة"]
    },
    {
      "name":"Rubeus Hagrid",
      "image":"images/hagrid.jpg",
      "power":82,"speed":48,"intelligence":66,
      "superpower":"Giant Strength & Creature Knowledge",
      "notes":["نصف عملاق","حارس المخلوقات","قلب طيب"], 
      "pros":["قوة جسدية","وفاء"], "cons":["قليل الخبرة النظرية"]
    },
    {
      "name":"Luna Lovegood",
      "image":"images/luna.jpg",
      "power":66,"speed":64,"intelligence":82,
      "superpower":"Unconventional Perception & Calm",
      "notes":["رؤية مختلفة","هدوء وثبات","إبداع"], 
      "pros":["تفكير خارج الصندوق"], "cons":["قد تبدو غريبة"]
    },
    {
      "name":"Neville Longbottom",
      "image":"images/neville.jpg",
      "power":72,"speed":60,"intelligence":76,
      "superpower":"Herbology Mastery & Bravery",
      "notes":["بدأ خجولًا ثم أصبح بطلاً","معرفة بالنباتات"], 
      "pros":["شجاعة","مهارات نباتية"], "cons":["ثقة متزعزعة سابقًا"]
    },
    {
      "name":"Ginny Weasley",
      "image":"images/ginny.jpg",
      "power":74,"speed":70,"intelligence":78,
      "superpower":"Powerful Combat Magic & Determination",
      "notes":["مقاتلة ماهرة","عضو جيش دمبلدور"], 
      "pros":["قدرة قتالية","عزم"], "cons":["تتأثر عاطفيًا"]
    },
    {
      "name":"Remus Lupin",
      "image":"images/lupin.jpg",
      "power":82,"speed":72,"intelligence":88,
      "superpower":"Lycanthrope Resilience & Defense Expertise",
      "notes":["معلّم محبوب","محارب في الدفاع ضد السحر الأسود"], 
      "pros":["خبرة","تعاطف"], "cons":["عرضة للانعزال"]
    },
    {
      "name":"Nagini",
      "image":"images/nagini.jpg",
      "power":86,"speed":78,"intelligence":58,
      "superpower":"Serpentine Agility & Venomous Attack",
      "notes":["كانت هوركروكس","مخاطرة قاتلة"], 
      "pros":["سرعة وهجوم مفاجئ"], "cons":["ذكاء محدود نسبياً"]
    },
    {
      "name":"Lucius Malfoy",
      "image":"images/lucius.jpg",
      "power":74,"speed":66,"intelligence":86,
      "superpower":"Political Influence & Resources",
      "notes":["نفوذ اجتماعي كبير","قوة مالية"], 
      "pros":["علاقات ونفوذ"], "cons":["خوف فقدان المكانة"]
    },
    {
      "name":"Dolores Umbridge",
      "image":"images/umbridge.jpg",
      "power":60,"speed":50,"intelligence":84,
      "superpower":"Political Control & Bureaucratic Power",
      "notes":["قوة إدارية وقمعية","لا مهارات قتالية كبيرة"], 
      "pros":["نفوذ إداري"], "cons":["ضعيفة قتاليًا"]
    },
    {
      "name":"Cedric Diggory",
      "image":"images/cedric.jpg",
      "power":78,"speed":74,"intelligence":80,
      "superpower":"Athleticism & Fair Play",
      "notes":["بطل رياضي","روح رياضية ونبل"], 
      "pros":["مهارات جسدية عالية"], "cons":["ضعف في السحر الأسود المتقدم"]
    }
  ],

  "anime": [
    {
      "name":"Goku",
      "image":"images/goku.jpg",
      "power":100,"speed":98,"intelligence":78,
      "superpower":"Super Saiyan Transformations & Ki Manipulation",
      "notes":["محارب سايان قوي","يتحكم في التحولات لرفع القوة","أنقذ الأرض مرات عديدة"], 
      "pros":["تحولات قوتية","تحمل هائل"], "cons":["ميل للقتال قد يؤثر على التخطيط"]
    },
    {
      "name":"Vegeta",
      "image":"images/vegeta.jpg",
      "power":99,"speed":96,"intelligence":82,
      "superpower":"Prince of Saiyans & Combat Mastery",
      "notes":["أميري سايان","تدريبات مكثفة","منافس دائم لجوكو"], 
      "pros":["اصرار وتدريب"], "cons":["فخر قد يقوده لخطأ"]
    },
    {
      "name":"Naruto Uzumaki",
      "image":"images/naruto.jpg",
      "power":95,"speed":92,"intelligence":80,
      "superpower":"Kurama Mode & Rasengan",
      "notes":["هوكاجي ومحارب إرادة","تحكم بشاكرا الكيوبي"], 
      "pros":["اصرار وقوة تحول"], "cons":["تسرع أحيانًا"]
    },
    {
      "name":"Sasuke Uchiha",
      "image":"images/sasuke.jpg",
      "power":98,"speed":94,"intelligence":92,
      "superpower":"Sharingan, Rinnegan & Chidori",
      "notes":["نجل عشيرة أوتشيها","قدرات بصرية استثنائية"], 
      "pros":["تقنيات بصرية قوية"], "cons":["صراعات عاطفية"]
    },
    {
      "name":"Sakura Haruno",
      "image":"images/sakura.jpg",
      "power":88,"speed":82,"intelligence":86,
      "superpower":"Medical Ninjutsu & Super Strength",
      "notes":["طبيبة نينجا","قوة بدنية علاجية"], 
      "pros":["شدة هجومية","مهارات طبية"], "cons":["تحتاج حماية في ساحة واسعة"]
    },
    {
      "name":"Kakashi Hatake",
      "image":"images/kakashi.jpg",
      "power":92,"speed":86,"intelligence":96,
      "superpower":"Sharingan (copy) & Tactical Genius",
      "notes":["معلم ومحارب تكتيكي","يستنسخ تقنيات"], 
      "pros":["ذكاء تكتيكي"], "cons":["يعتمد أحيانًا على الشارينغان"]
    },
    {
      "name":"Ichigo Kurosaki",
      "image":"images/ichigo.jpg",
      "power":97,"speed":92,"intelligence":78,
      "superpower":"Soul Reaper Powers & Hollow Forms",
      "notes":["قوة هجومية وتحولات","دور دفاعي عن البشر"], 
      "pros":["تحولات تضاعف القوة"], "cons":["ضغوط نفسية بعد التحولات"]
    },
    {
      "name":"Light Yagami",
      "image":"images/light.jpg",
      "power":55,"speed":60,"intelligence":100,
      "superpower":"Strategic Mind & Death Note (tool)",
      "notes":["عبقري استراتيجي","استخدم مذكرة الموت بذكاء"], 
      "pros":["ذكاء وتحليل"], "cons":["ليس مقاتلًا جسديًا"]
    },
    {
      "name":"L (L Lawliet)",
      "image":"images/l.jpg",
      "power":48,"speed":60,"intelligence":100,
      "superpower":"Detective Genius & Analytical Mind",
      "notes":["أعظم محقق","طرق غير تقليدية"], 
      "pros":["تحليل خارق"], "cons":["ضعف جسدي"]
    },
    {
      "name":"Saitama",
      "image":"images/saitama.jpg",
      "power":100,"speed":100,"intelligence":70,
      "superpower":"One Punch Knockout (Overwhelming Strength)",
      "notes":["يهزم أي خصم بلكمة واحدة عادةً","شخصية كوميدية قوية"], 
      "pros":["قوة مطلقة"], "cons":["ملل من عدم وجود تحدي"]
    },
    {
      "name":"Levi Ackerman",
      "image":"images/levi.jpg",
      "power":92,"speed":96,"intelligence":88,
      "superpower":"ODM Mastery & Tactical Precision",
      "notes":["أشهر مقاتل ضد العمالقة","سرعة ومهارة عالية"], 
      "pros":["مهارة قتالية فائقة"], "cons":["جهد بدني كبير"]
    },
    {
      "name":"Killua Zoldyck",
      "image":"images/killua.jpg",
      "power":88,"speed":96,"intelligence":86,
      "superpower":"Assassin Training & Nen (Lightning)",
      "notes":["قاتل مُدرَّب منذ الطفولة","سرعة رد فعل استثنائية"], 
      "pros":["سرعة ومهارة اغتيال"], "cons":["صراع هوية داخلي"]
    },
    {
      "name":"Deku",
      "image":"images/deku.jpg",
      "power":90,"speed":88,"intelligence":86,
      "superpower":"One For All - Transferrable Power",
      "notes":["حامل One For All","يتعلم السيطرة على القوة"], 
      "pros":["قوة متزايدة"], "cons":["حاجة للتمرين والتحكم"]
    },
    {
      "name":"Bakugo",
      "image":"images/bakugo.jpg",
      "power":88,"speed":90,"intelligence":78,
      "superpower":"Explosion Quirk & Aggressive Combat",
      "notes":["قوة الانفجار مدمرة","روح تنافسية كبيرة"], 
      "pros":["هجوم سريع وقوي"], "cons":["مزاج عدواني يؤثر أحيانًا"]
    },
    {
      "name":"Zoro",
      "image":"images/zoro.jpg",
      "power":90,"speed":85,"intelligence":70,
      "superpower":"Swordsmanship & Haki",
      "notes":["سيفي خبير","قوة تحمل عالية"], 
      "pros":["مهارات سيف عالية"], "cons":["ميزة أقل في التخطيط الاستراتيجي"]
    },
    {
      "name":"Luffy",
      "image":"images/luffy.jpg",
      "power":92,"speed":88,"intelligence":75,
      "superpower":"Gum-Gum Fruit (Rubber) & Gear Transformations",
      "notes":["قائد قراصنة ذو طموح عالٍ","قوة تحمل وتحولات متعددة"], 
      "pros":["تحمل وقوة هجومية"], "cons":["سذاجة أحيانًا"]
    },
    {
      "name":"Tanjiro",
      "image":"images/tanjiro.jpg",
      "power":88,"speed":82,"intelligence":85,
      "superpower":"Breath of the Sun & Water Techniques",
      "notes":["قناص شجاع وملتزم","تقنيات نفسية قتالية"], 
      "pros":["قدرات قتالية ومنهجية"], "cons":["حساسية عاطفية"]
    },
    {
      "name":"Nezuko",
      "image":"images/nezuko.jpg",
      "power":80,"speed":90,"intelligence":70,
      "superpower":"Demon Transformation & Regeneration",
      "notes":["شقيقة تانجيرو ومحاربة","تتحكم بالقوة الشيطانية"], 
      "pros":["قدرة شفاء وسرعة"], "cons":["قيود تحويلية"]
    },
    {
      "name":"Eren Yeager",
      "image":"images/eren.jpg",
      "power":95,"speed":85,"intelligence":80,
      "superpower":"Titan Shifting & Coordinate Power",
      "notes":["قدرات تتغير بالتطور","تحول إلى عملاق متحكم"], 
      "pros":["قوة تحول عظيمة"], "cons":["تعقيدات نفسية"]
    }
  ]
};
