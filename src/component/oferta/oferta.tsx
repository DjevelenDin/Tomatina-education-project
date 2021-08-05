import React from "react";
import "./oferta.css";
import { useTranslation } from "react-i18next";

const Oferta = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="oferta-conteiner">
      <h1>
        Договір <span className="saladGreen">Оферта</span>
      </h1>
      <div className="oferta-text">
        <p>
          Цей Договір є публічним договором – Договором публічної оферти, тобто
          відповідно до статті 633 Цивільного кодексу України його умови
          однакові для всіх покупців незалежно від статусу (фізична особа,
          юридична особа, фізична особа – підприємець). При повній згоді з даним
          Договором, покупець приймає умови і порядок оформлення замовлення,
          оплати товару, доставки товару. Цей Договір є угодою між
          інтернет-магазином «www.tomatina.ua») (надалі по тексту – «Продавець»)
          і будь-якою юридичною особою, фізичною особою-підприємцем або фізичною
          особою, користувачем послуг інтернет-магазину, яка надалі іменується
          “Покупець” (надалі – «Покупець»), що включає всі суттєві умови
          організації купівлі – продажу дистанційним способом (тобто через
          Інтернет – магазин).
        </p>
        <p>
          Умови даного Договору регулюють взаємовідносини Продавця і Покупця та
          визначаються Законом України «Про захист прав споживачів» № 1023-XII
          від 12 травня 1991 року, Правилами роздрібної торгівлі непродовольчими
          товарами, затвердженими наказом Міністерства економіки України № 104
          від 19 квітня 2007 року.
        </p>
        <p>
          Ця угода носить характер публічної оферти, є еквівалентом “усної
          угоди” і відповідно до чинного законодавства України має належну
          юридичну силу.
        </p>
        <p>1. Загальні положення</p>
        <p>
          1.1. Цей договір є публічною офертою ( відповідно до ст. 633, 641 і
          гл. 63 Цивільного кодексу України) і містить всі істотні умови
          організації купівлі-продажу дистанційним способом, тобто через
          інтернет-магазин.
        </p>
        <p>
          1.2. У відповідності до ст. 642 Цивільного Кодексу України повним і
          безсуперечним прийняттям умов публічного договору, тобто публічної
          оферти інтернет-магазину є факт натисканням на посилання “Оформити
          замовлення”, «Розмістити замовлення» або «Купити в 1 клік та оплати
          замовлення в розмірі 100% на умовах цієї угоди.
        </p>
        <p>
          1.3. Публічна оферта також є прийнятою при реєстрації Покупця на сайті
          інтернет-магазину.
        </p>
        <p>
          1.4. Укладаючи Договір, Покупець підтверджує, що цілком і повністю
          ознайомлений та згоден з його умовами, а також, у разі, якщо Покупець
          є фізичною особою, дає дозвіл на обробку своїх персональних даних з
          метою можливості виконання умов цього Договору, можливості проведення
          взаєморозрахунків, а також для отримання рахунків, актів та інших
          документів. Дозвіл на обробку персональних даних діє протягом усього
          строку дії Договору. Крім цього, укладанням цього Договору, Покупець
          підтверджує, що йому повідомлено (без додаткового повідомлення) про
          права, встановлені Законом України «Про захист персональних даних»,
          про цілі збору даних. Обсяг прав Покупця, як суб’єкта персональних
          даних відповідно до Закону України «Про захист персональних даних»,
          йому відомий і зрозумілий.{" "}
        </p>
        <p>2. Терміни та визначення </p>
        <p>
          2.1. «Інтернет – магазин» -сайт Продавця («www.tomatina.ua»),
          створений для укладення договорів роздрібної та оптової купівлі –
          продажу на підставі ознайомлення Покупця з запропонованим Продавцем
          описом Товару на фотознімках, за допомогою мережі Інтернет, що
          виключає можливість безпосереднього ознайомлення Покупця з Товаром –
          дистанційним засобом продажу товару.{" "}
        </p>
        <p>
          2.2. “Товар” – перелік найменувань асортименту, представлений в
          інтернет-магазині.{" "}
        </p>
        <p>
          {" "}
          2.3. “Персональні дані” – будь-яка інформація, яка прямо чи
          опосередковано відноситься до певної особи, чи до особи, яка
          визначається.{" "}
        </p>
        <p>
          {" "}
          2.4. «Істотний недолік Товару» – недолік, який робить неможливим чи
          недопустимим використання товару відповідно до його цільового
          призначення, виник з вини виробника (Продавця), після його усунення
          проявляється знову з незалежних від споживача причин і при цьому
          наділений хоча б однією з нижченаведених ознак:
        </p>
        <p> а) він взагалі не може бути усунутий;</p>
        <p> б) його усунення потребує понад чотирнадцять календарних днів;</p>
        <p> в) він робить товар суттєво іншим, ніж передбачено договором.</p>
        <p> 3. Предмет договору </p>
        <p>
          3.1. Інтернет-магазин зобов’язується передати у власність Покупцеві
          товар, а Покупець зобов’язується оплатити і прийняти товар на умовах
          Цього договору.{" "}
        </p>
        <p>
          3.2. Цей договір регулює купівлю-продаж в інтернет-магазині, в тому
          числі:
        </p>
        <p>
          {" "}
          а) добровільний вибір Покупцем товарів в інтернет-магазині по
          категоріям;
        </p>
        <p>
          {" "}
          б) самостійне оформлення Покупцем замовлення на сайті в
          інтернет-магазині;
        </p>
        <p> в) оплата Покупцем замовлення, оформленого в інтернет-магазині; </p>
        <p>
          г) виконання і передача замовлення Покупцеві у власність на умовах
          Цього договору.{" "}
        </p>
        <p>4. Порядок оформлення замовлення </p>
        <p>
          4.1. Покупець самостійно оформляє замовлення онлайн в
          інтернет-магазині або за допомогою телефонних засобів зв’язку за
          контактами, вказаними в інтернет-магазині.
        </p>
        <p> 5. Вартість і порядок оплати товару </p>{" "}
        <p>
          5.1. Повна вартість товару вказується на сторінках інтернет-магазину
          Продавця.
        </p>{" "}
        <p>
          {" "}
          5.2. Ціни на Товари і послуги можуть змінюватися в залежності від
          кон’юнктури ринку, що відбивається на цінах в інтернет-магазині.
          Продавець не може змінювати ціну для конкретного Покупця, в разі, якщо
          той вже прийняв умови Продавця та здійснив у встановленому цим
          договором порядку оплату Товару (послуг).
        </p>{" "}
        <p>
          {" "}
          5.3. Покупець оплачує замовлення протягом 2-х робочих днів (в розмірі
          100% передплати) за допомогою банківського переказу грошей на поточний
          рахунок Продавця, що вказаний в рахунку, в т.ч. за допомогою
          Інтернет-банкінгу.
        </p>{" "}
        <p> 6. Доставка замовлення</p>{" "}
        <p>
          {" "}
          6.1. Відвантаження товару Покупцю відбувається після надходження від
          Покупця 100% оплати по виставленому рахунку.
        </p>{" "}
        <p>
          {" "}
          6.2. Доставка і повернення товару виконується силами Продавця або
          транспортної компанії (перевізником) за рахунок Покупця. Загальний
          строк доставки не може перевищувати 10 днів.
        </p>{" "}
        <p>
          6.3. Вартість доставки в Інтернет – магазині не вказується, оскільки
          залежить від діючих тарифів транспортної компанії (перевізника).
        </p>{" "}
        <p>
          {" "}
          6.4. При замовленні оптових партій, терміни і методи доставки
          узгоджуються окремо в кожному конкретному випадку.
        </p>{" "}
        <p>
          {" "}
          6.5. Продавець не несе відповідальності за термін доставки замовлення,
          тому що вони залежать від дій третіх осіб (перевізників).
        </p>{" "}
        <p>
          {" "}
          6.6. Оплата вартості доставки здійснюється Покупцем
          Компанії-перевізнику самостійно, при отриманні товару. Точна вартість
          доставки визначається Компанією-перевізником.{" "}
        </p>{" "}
        <p> 7. Повернення товару належної якості</p>{" "}
        <p>
          {" "}
          7.1. Покупець має право обміняти Товар належної якості на аналогічний
          у продавця в якого він був придбаний, якщо товар не задовольнив його
          за формою, габаритами, фасоном, кольором, розміром або з інших причин
          не може бути ним використаний за призначенням за наступними умовами:{" "}
        </p>{" "}
        <p>
          {" "}
          А) товар для обміну Продавцю надано протягом не більше чотирнадцяти
          днів, не рахуючи дня купівлі;{" "}
        </p>{" "}
        <p>
          {" "}
          Б) товар може бути замінений якщо він жодного разу не був в
          експлуатації, не містить сліди використання і якщо збережено його
          товарний вигляд, споживчі властивості, пломби, ярлики,плівки, не
          порушено цілісність пакування як самого товару, так і комплектуючих до
          нього;
        </p>{" "}
        <p>
          {" "}
          В) товар не містить подряпин, сколів, потертості, повністю справний;
        </p>{" "}
        <p> Г) збережена повна комплектність проданого товару;</p>{" "}
        <p>
          {" "}
          Ґ) товар може бути замінений при пред’явленні Покупцем розрахункового
          документа, виданого Покупцю разом з проданим Товаром.{" "}
        </p>{" "}
        <p>
          7.1.1. Вимоги п.7.1. не поширюються на товари, які у відповідності до
          Додатку №3 до Постанови Кабінету Міністрів України від 19.03.94 №172
          «Про реалізацію окремих положень Закону України «Про захист прав
          споживачів», віднесені до Переліку товарів, належної якості, що не
          підлягають обміну (поверненню){" "}
        </p>{" "}
        <p>
          7.2. У разі, якщо Товар не відповідає умовам визначеним пп. А) – Ґ) п.
          7.1., Продавець має право відмовити в обміні Товару.
        </p>{" "}
        <p>
          {" "}
          7.3. Транспортні витрати на доставку Товару при обміні за п. 7.1.
          покладаються на Покупця.
        </p>{" "}
        <p>
          {" "}
          7.4. При обміні товару його гарантійний строк обчислюється заново від
          дня обміну.
        </p>{" "}
        <p>
          {" "}
          7.5. Якщо на момент обміну аналогічного товару немає у продажу,
          Покупець має право або придбати будь-які інші товари з наявного
          асортименту з відповідним перерахуванням вартості, або розірвати
          договір та одержати назад гроші у розмірі вартості повернутого товару,
          або здійснити обмін товару на аналогічний при першому ж надходженні
          відповідного товару в продаж.
        </p>{" "}
        <p> 8. Права та обов’язки сторін </p>{" "}
        <p> 8.1. Покупець зобов’язаний: </p>{" "}
        <p>
          а) ознайомитись з інформацією про Товар, яка розміщена на сайті
          Продавця;{" "}
        </p>{" "}
        <p> б) самостійно оформити замовлення на сайті; </p>{" "}
        <p>
          {" "}
          в) своєчасно оплатити та отримати замовлення у Перевізника на умовах
          цього договору;
        </p>{" "}
        <p>
          {" "}
          г) при отриманні товару у перевізника впевнитися у його цілісності та
          комплектності шляхом огляду вмісту упаковки. У випадку виявлення
          пошкоджень та неповної комплектації – зафіксувати їх в акті, який
          разом із Покупцем повинен підписати співробітник перевізника.
        </p>{" "}
        <p>
          {" "}
          8.2. Покупець має право вимагати від інтернет-магазину дотримання умов
          цього договору.
        </p>{" "}
        <p> 8.3. Інтернет – магазин зобов’язаний:</p>{" "}
        <p> а) дотримувати умов цього договору;</p>{" "}
        <p>
          {" "}
          б) передати Покупцю товар у відповідності з обраним зразком,
          розміщеним в інтернет-магазині, оформленим замовленням та умовами
          цього договору;
        </p>{" "}
        <p>
          {" "}
          в) інтернет-магазин не несе відповідальності, не може виступати в
          якості відповідача у суді і не відшкодовує збитки, що виникли у
          Покупця через дію чи бездіяльність третіх осіб.
        </p>{" "}
        <p> 9. Порядок прийому товару Покупцем </p>{" "}
        <p>
          {" "}
          9.1. При отриманні Товару на складі перевізника, від кур’єра або
          Продавця, Покупець зобов’язаний перевірити зовнішню цілісність
          упаковки, після чого відкрити її та безпосередньо пересвідчитися у
          належному зовнішньому стані Товару (відсутності механічних пошкоджень)
          та повноті його комплектності.
        </p>{" "}
        <p>
          {" "}
          9.2. У випадку наявності хоча б одного з перерахованих в п.9.1.
          Договору недоліків, Покупець зобов’язаний зафіксувати його у
          складеному акті довільної форми. Акт повинен бути підписаний Покупцем
          та співробітником перевізника або Продавця..Протягом 1 (одного) дня з
          моменту підписання Акту Покупець зобов’язаний повідомити менеджера
          (представника Продавця відповідального за оформлення замовлення на
          Товар) про виявлені недоліки та домовитися про заміну Товару.
        </p>{" "}
        <p>10. Відповідальність сторін</p>{" "}
        <p>
          {" "}
          10.1. Сторони відповідають за невиконання або неналежне виконання умов
          цього Договору в порядку, передбаченому цим Договором і чинним
          законодавством України.
        </p>{" "}
        <p>
          {" "}
          10.2. У випадку обставин непереборної сили, сторони звільняються від
          виконання умов цього Договору. Під обставинами непереборної сили для
          цілей цього Договору розуміються події, що мають надзвичайний,
          невідворотний непередбачуваний характер, які виключають або об’єктивно
          перешкоджають виконанню цього Договору, настання яких Сторони не могли
          передбачити й запобігти розумними мірами.
        </p>{" "}
        <p>
          {" "}
          10.3. Сторона, що посилається на дію обставин непереборної сили
          повинна протягом п’яти календарних днів у письмовому вигляді за
          допомогою електронної пошти повідомити іншу сторону про настання таких
          обставин.
        </p>
        <p> 11. Інші умови</p>{" "}
        <p>
          {" "}
          11.1. Інтернет – магазин залишає за собою право в односторонньому
          порядку вносити зміни в цей Договір з попередньою публікацією його на
          сайті «www.tomatina.ua»
        </p>{" "}
        <p>
          {" "}
          11.2. Інтернет – магазин створений для організації дистанційного
          способу продажу товарів через Інтернет.
        </p>{" "}
        <p>
          {" "}
          11.3. Інтернет – магазин не несе відповідальність за зміст і
          правдивість інформації, що надається Покупцем при оформленні
          замовлення.{" "}
        </p>
        <p>12. Термін дії цього договору </p>{" "}
        <p>
          12.1. Цей договір набирає чинності з дня оформлення замовлення або
          реєстрації в інтернет-магазині «www.tomatina.ua» і діє до виконання
          всіх умов договору.
        </p>
      </div>
    </div>
  );
};
export default Oferta;
