import { html } from "../lib/lit-html.js";

const privacyPolicyTemplate = () => html`
  <section class="terms" id="terms">
    <h1>Политика за поверителност и защита на личните данни</h1>
    <p>
      1. Въведение: Аз, Пламен Петров, се ангажирам с Вашата конфиденциалност и
      защитата на Вашите лични данни. Тази Политика за поверителност описва как
      събирам, използвам и защитавам Вашите лични данни, когато използвате моя
      уебсайт CurrentFix (наричан по-долу „Сайтът“) или когато се свързвате с
      нас за предоставяне на услуги.
    </p>
    <p>
      2. Какви лични данни събираме? При използването на Сайта и нашите услуги,
      ние събираме следните видове лични данни: Име и фамилия, Телефонен номер,
      Имейл адрес, Адрес на обекта (при необходимост от физическо присъствие) и
      Данни за извършените услуги (например, вид услуга, дата на изпълнение,
      цена)
    </p>
    <p>
      3. Как събираме личните Ви данни? Ние събираме лични данни, когато: 1.1
      Попълвате форма за контакт или поръчка на услуги на нашия Сайт и 1.2
      Свързвате се с нас чрез имейл, телефон или други канали
    </p>
    <p>
      4. Защо събираме Вашите лични данни? Вашите лични данни се използват за
      следните цели: Да обработим Вашите запитвания и заявки за услуги, Да
      потвърдим и организираме изпълнението на услугите, За комуникация с Вас
      относно подробности за услугите, плащания и други въпроси, За да издадем
      фактури и други финансови документи, свързани с предоставянето на
      услугите, За подобряване на качеството на нашите услуги
    </p>
    <p>
      5. Как се защитават Вашите лични данни? Ние предприемаме всички необходими
      технически и организационни мерки, за да защитим Вашите лични данни от
      несанкциониран достъп, промяна или разкриване. Данните се съхраняват на
      сигурни сървъри, а достъпът до тях е ограничен до упълномощени лица.
    </p>
    <p>
      6. Споделяне на Вашите лични данни: Аз не продавам, не отдавам под наем и
      не разкривам Вашите лични данни на трети лица, освен в случаите, когато:
      1.1 Това е необходимо за изпълнението на нашите задължения към Вас
      (например, при плащания през трета страна); 1.2 Има законово изискване да
      предоставим Вашите данни (например, по искане на държавни органи); 1.3
      Възникне необходимост от споделяне на данни с партньори, които помагат за
      предоставянето на нашите услуги (например, за издаване на фактури,
      доставка на материали и т.н.)
    </p>
    <p>
      7. Какви са Вашите права във връзка с личните данни? Вие имате право: 1.1
      Да поискате достъп до личните данни, които съхраняваме за Вас; 1.2 Да
      поискате коригиране на неточни или непълни данни; 1.3 Да поискате
      изтриване на личните данни, ако те вече не са необходими за целите, за
      които са били събрани; 1.4 Да ограничите обработката на Вашите данни; 1.5
      Да възразите срещу обработката на Вашите лични данни, ако има законово
      основание за това; 1.6 Да подадете жалба до компетентен орган за защита на
      личните данни, ако считате, че правата Ви са нарушени;
    </p>
    <p>
      8. Съхранение на лични данни: Вашите лични данни ще се съхраняват само за
      периода, необходим за изпълнение на целите, за които са били събрани, или
      до момента на подадено искане за изтриването им, освен ако
      законодателството изисква по-дълъг срок на съхранение.
    </p>
    <p>
      9. Промени в Политиката за поверителност: Тази Политика за поверителност
      може да бъде променяна от време на време. Всяка промяна ще бъде
      публикувана на Сайта, като датата на последната актуализация ще бъде
      отбелязана в края на документа.
    </p>
    <p>
      10. Контакт с мен: Ако имате въпроси относно Политиката за поверителност
      или искате да упражните някое от Вашите права, можете да се свържете с мен
      на: <br />Телефон: +359877083399 <br /></p>
      <p>Дата на последна актуализация: [05.02.2025]</p>
    
  </section>
`;

export function funcPrivacyPolicy(e) {
  e.render(privacyPolicyTemplate());
}
