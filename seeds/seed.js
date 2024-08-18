/* eslint-disable max-len */
// NPM Modules
import knex from 'knex';
import bCrypt from 'bcryptjs';
import knexConfigs from '../knex.configs';

require('dotenv').config();

const IMAGE_HOST = process.env.HOST_OF_SERVER;

async function seed(pg) {
  await pg('users').insert([
    {
      username: 'admin',
      email: 'van@bk.ru',
      password: bCrypt.hashSync('easysol_123', bCrypt.genSaltSync(10), null),
      role: 'superAdmin',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('partners').insert([
    {
      name: 'Partner 1',
      logo: `${IMAGE_HOST}/upload/slide1.jpg`,
      title: 'Title 1',
      text: 'Description for partner 1',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Partner 2',
      logo: `${IMAGE_HOST}/upload/slide1.jpg`,
      title: 'Title 2',
      text: 'Description for partner 2',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('vacancies').insert([
    {
      id: 1,
      name: 'Vacancy 1',
      description: 'Description for vacancy',
      title: 'Job Title 1',
      text: 'Job details for vacancy 1',
      salary: 50000.0,
      created_at: new Date('2024-08-06T09:06:13.041Z').toISOString(),
      updated_at: new Date('2024-08-06T09:06:13.041Z').toISOString(),
      titleName:
        'Մենք փնտրում ենք վաճառքի և սպասարկման մասնագետ Երևան քաղաքի սպասարկման կենտրոններում աշխատելու համարԵթե պատրաստ ես գիտելիքդ, փորձդ ու ողջ ներուժդ գործի դնել՝ մարդկանց անխափան հաղորդակցումն ապահովելու համար, ապա միացի՛ր մեզ։',
      titles1: JSON.stringify([
        'Տարեկան լրացուցիչ 20 վճարվող արձակուրդ',
        'Տարեկան լրացուցիչ 6 վճարվող հանգստյան օրեր (Day off)',
        'Ծննդյան տարեդարձի արձակուրդ',
        'Ուրախ ուրբաթներ',
        'Անվճար «Level up փաթեթ»',
        '50% զեղչ «Unity» ֆիքսված ինտերնետ փաթեթի համար',
        'Ucom բոլոր ծառայություններից արտոնյալ պայմաններով օգտվելու հնարավորություն',
        'Բժշկական ապահովագրություն',
        'Աճելու, զարգանալու և մասնագիտանալու մեծ հնարավորություն',
        'Ստեղծագործ, պրոֆեսիոնալ թիմակիցներ, որոնք միշտ կիսվում են գիտելիքներով և ոլորտի փորձով',
        'Galaxy Group-ի ընկերությունների կողմից մատուցվող ծառայությունների համար զեղչի քարտ (TIME, Chronograph, KINO PARK և այլն)',
        '«Ընտանեկան արժեքների» նվեր փաթեթ հատուկ առիթների դեպքում (ամուսնություն, երեխայի ծնունդ)',
        'Հատուկ զեղչեր տարբեր ժամանցի կենտրոններում (մարզահամալիր, յոգայի և ֆիթնես կենտրոններ, հյուրանոցներ, ռեստորաններ և սրճարաններ և այլն)'
      ]),
      titles2: JSON.stringify([
        'Հաճախորդներին տրամադրել ընկերության կողմից առաջարկվող ծառայությունների, հատուկ առաջարկների, սակագնային պլանների վերաբերյալ տեղեկատվություն',
        'Լինել բաժանորդների տարատեսակ պահանջների և հարցերի լուծման փորձագետ',
        'Իրականացնել Ընկերության կողմից ներկայացվող ծառայությունների և սարքավորումերի վաճառք',
        'Բացահայտել հաճախորդների պահանջները և անել համապատասխան առաջարկներ:'
      ]),
      titles3: JSON.stringify([
        'Զարգանալու և աշխատելու մեծ ցանկություն եւ պատրաստակամություն',
        'Գրագիտություն, եւ օտար լեզուների լավ իմացություն',
        'MS Office- ի լավ իմացություն',
        'Համակարգչային ծրագրեր արագ յուրացնելու կարողություն',
        'Հաղորդակցման ճկունություն և թիմում աշխատելու ունակություն։'
      ]),
      email: 'Դիմիր`ուղարկելով ռեզյումեդ career@ucom.am էլ․հասցեով։'
    }
  ]);

  await pg('policies').insert([
    {
      text: 'Welcome to our Privacy Policy. Your privacy is critically important to us. Our application does not collect any personal information unless it is provided voluntarily by users. We do not sell, trade, or otherwise transfer your personal information to outside parties. We may collect non-personal information for the purpose of improving our services, such as analytics data and usage patterns. By using our application, you consent to our Privacy Policy and agree to its terms. If you have any questions about our Privacy Policy, please contact us. This Privacy Policy was last updated on',
      show:true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('slides').insert([
    {
      image: `${IMAGE_HOST}/upload/slide1.jpg`,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      image: `${IMAGE_HOST}/upload/slide2.jpg`,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      image: `${IMAGE_HOST}/upload/slide3.jpg`,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      image: `${IMAGE_HOST}/upload/slide4.jpg`,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      image: `${IMAGE_HOST}/upload/slide5.jpg`,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      image: `${IMAGE_HOST}/upload/slide6.jpg`,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      image: `${IMAGE_HOST}/upload/slide7.jpg`,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);

  await pg('services').insert([
    
  
    {
      name: "Բաժին 1",
      description: "Շենք-շինությունների ճարտարագիտական համակարգերի տեխնիկական սպասարկում",
      subTitle:JSON.stringify( [
        {
          "text": "Կազմակերպության ճարտարագետների կողմից սպասարկվում են նախագծով նախատեսված բոլոր ճարտարագիտական համակարգերը, այդ թվում՝",
          "details": ['Էլեկտրամատակարարման և լուսավորության համակարգ',
            'Օդափոխման, օդորակման և զովացման համակարգ',
            'Ջեռուցման համակարգ',
            'Ջրամատակարարման և կոյուղու համակարգ',
            'Հրշեջ համակարգերը, հակահրդեհային ազդանշանային և ծանուցման համակարգերը',
            'Անվտանգության ազդանշանային, տեսահսկման և անցագրային համակարգեր',
            'Ծխահեռացման և օդի դուրսմղման համակարգեր',
            'Սարքավորումների ավտոմատ կառավարման և վերահսկողության համակարգ',
            'Ավտոմատ դռների, դարպասների և ծածկերի ավտոմատ կառավարման համակարգեր',
            'Բազային ճարտարագիտական համակարգերի սարքավորումների ընդունում՝ համապատասխան ակտերի ստորագրմամբ',
            'Սարքավորումների նախապատրաստական և փորձարկման աշխատանքների վերահսկողության իրականացում',
            'Կատարողական փաստաթղթերի, աշխատանքային նախագծի և փաստացի կատարված աշխատանքների համապատասխանության ստուգում',
            'Ինժեներատեխնիկական սարքավորումների գույքագրման գործընթացի կազմակերպում',
            'Սարքավորումների փաստաթղթերի փաթեթի պատրաստում',
            'Նախագծային և կատարողական փաստաթղթերի փաթեթի ամբողջական ճշտում',
            'Իրականացված աշխատանքների համապատասխանության ստուգում կատարողական փաստաթղթերի հետ',
            'Շահագործող կազմակերպության վարած փաստաթղթերի փաթեթի համապատասխանության ստուգում ՀՀ գործող օրենքներին և նորմատիվ իրավական ակտերին',
            'Սպասարկման աշխատանքների որակի գնահատում՝ արտադրողի կողմից տրված ցուցումներին և տեղակայման առանձնահատկությունների համապատասխանության ստուգում'
          ]
        },
        {
          "text": "Կազմակերպությունը մասնակցում է օբյեկտի ընդունման գործընթացին և տրամադրում նախաշահագործման խորհրդատվություն՝ որպես ապագա հնարավոր շահագործող կազմակերպություն՝ հետևելով ներքոնշյալ գործընթացին",
          "details": ["Բազային ճարտարագիտական համակարգերի սարքավորումների ընդունում՝ համապատասխան ակտերի ստորագրմամբ", "Սարքավորումների նախապատրաստական և փորձարկման աշխատանքների վերահսկողության իրականացում","Կատարողական փաստաթղթերի,աշխատանքային նախագծի և փաստացի կատարված աշխատանքների համապատասխանության ստուգում"
            ,"Ինժեներատեխնիկական սարքավորումների գույքագրման գործընթացի կազմակերպում","Սարքավորումների փաստաթղթերի փաթեթի պատրաստում",]

        },
      {
        "text":"Կազմակերպությոնը իրականացնում է նախագծային փաստաթղթերի և օբկեկտի ճարտարագիտական համակարգերի տեխնիկական վիճակի գնահատում (տեխնիկական աուդիտ)",
        "details":["Նախագծային և կատարողական փաստաթղթերի փաթեթի ամբողջական ճշտում","Իրականացված աշխատանքների համապատասխանության ստուգում կատարողական փաստաթղթերի հետ",
          "Շահագործող կազմակերպության վարած փաստաթղթերի փաթեթի համապատասխանության ստուգում ՀՀ գործող օրենքներին և նորմատիվ իրավական ակտերին",
          "Սպասարկման աշխատանքների որակի գնահատում՝ արտադրողի կողմից տրված ցուցումներին և տեղակայման առանձնահատկությունների համապատասխանության ստուգում "
        ]
      }
      ])
    },
       {
      name: 'Բաժին 2',
      description: 'Շենք-շինությունների մաքրության ծառայություն',
      subTitle: JSON.stringify(
        
        
        {
          "title":'Կազմակերպությունն առաջարկում է հետևյալ մաքրման ծառայությունները՝',
          "details":  [
          'Ամենօրյա ընթացիկ մաքրում',
          'Հիմնարար մաքրություն',
          'Հետշինարարական մաքրում',
          'Քիմմաքրման ծառայություններ',
          'Արտաքին տարածքների մաքրում',
          'Աղբահեռացում և ձնահեռացում',
          'Ապակեպատ մակերևույթների, վիտրաժների և շենքի ճակատային մասի լվացում',
          'Մաքրության լրացուցիչ ծառայությունների մատուցում'
        ]
        },
        {
         "title":"Ընկերությունն իրականացնում է տարածքների մաքրման պրոֆեսիոնալ համալիր ծառայություններ մասնավոր և կորպորատիվ հաճախորդների համար: Իրականացվող ծառայությունների բարձր որակը ապահովվում է ժամանակակից պրոֆեսիոնալ տեխնիկայի կիրառմամբ և մեր փորձառու մասնագետների կողմից որակյալ լվացող միջոցների օգտագործմամբ:" ,
         "details":[""]
        }
       ),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Բաժին 3',
      description: 'Կառավարման և սպասարկման ծառայությունները ներառում են՝',
      subTitle: JSON.stringify(
  
        {
          "title":'Կազմակերպությունն առաջարկում է հետևյալ մաքրման ծառայությունները՝',
          "details":  [
                  'Տեղանքի զննում, կայանի հզորության, տեղադրվող համակարգի մոդելների վերաբերյալ խորհրդատվության տրամադրում',
                  'Լիզինգային ծրագրերի մասին խորհրդատվության տրամադրում',
                  'Գնորդի համար փաստաթղթերի կազմման և բանկին դիմելու գործընթացում աջակցության տրամադրում',
                  'Դիզայն-նախագծերի պատրաստում',
                  'Անհրաժեշտ նյութացանկի կազմում',
                  'Կայանի մոնտաժման աշխատանքներ',
                  'Հետագա երաշխիքային (ետերաշխիքային) ծառայության տրամադրում'
                ]
        },
        {
         "title":"Ընկերությունն իրականացնում է տարածքների մաքրման պրոֆեսիոնալ համալիր ծառայություններ մասնավոր և կորպորատիվ հաճախորդների համար: Իրականացվող ծառայությունների բարձր որակը ապահովվում է ժամանակակից պրոֆեսիոնալ տեխնիկայի կիրառմամբ և մեր փորձառու մասնագետների կողմից որակյալ լվացող միջոցների օգտագործմամբ:" ,
         "details":[""]
        }
       ),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Բաժին 4',
      description: 'Արևային ֆոտովոլտային կայանների նախագծում և տեղադրում',
      subTitle: JSON.stringify(
  
        {
          "title":'Արևային ֆոտովոլտային կայանների նախագծում և տեղադրում',
          "details":  [
                  'Տեղանքի զննում, կայանի հզորության, տեղադրվող համակարգի մոդելների վերաբերյալ խորհրդատվության տրամադրում',
                  'Լիզինգային ծրագրերի մասին խորհրդատվության տրամադրում',
                  'Գնորդի համար փաստաթղթերի կազմման և բանկին դիմելու գործընթացում աջակցության տրամադրում',
                  'Դիզայն-նախագծերի պատրաստում',
                  'Անհրաժեշտ նյութացանկի կազմում',
                  'Կայանի մոնտաժման աշխատանքներ',
                  'Հետագա երաշխիքային (ետերաշխիքային) ծառայության տրամադրում'
                ]
        },
        {
         "title":"Ընկերությունն իրականացնում է տարածքների մաքրման պրոֆեսիոնալ համալիր ծառայություններ մասնավոր և կորպորատիվ հաճախորդների համար: Իրականացվող ծառայությունների բարձր որակը ապահովվում է ժամանակակից պրոֆեսիոնալ տեխնիկայի կիրառմամբ և մեր փորձառու մասնագետների կողմից որակյալ լվացող միջոցների օգտագործմամբ:" ,
         "details":[
                'Տեղանքի զննում, կայանի հզորության, տեղադրվող համակարգի մոդելների վերաբերյալ խորհրդատվության տրամադրում',
                'Լիզինգային ծրագրերի մասին խորհրդատվության տրամադրում',
                'Գնորդի համար փաստաթղթերի կազմման և բանկին դիմելու գործընթացում աջակցության տրամադրում',
                'Դիզայն-նախագծերի պատրաստում',
                'Անհրաժեշտ նյութացանկի կազմում',
                'Կայանի մոնտաժման աշխատանքներ',
                'Հետագա երաշխիքային (ետերաշխիքային) ծառայության տրամադրում'
              ]
        }
       ),
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await seed(pg);
    console.log('Successfully inserted all data ... ');
    process.kill(process.pid);
  } catch (error) {
    console.error(error.message);
  } finally {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);

    await pg.destroy(); // Close the database connection after inserting data
  }
}

init();
