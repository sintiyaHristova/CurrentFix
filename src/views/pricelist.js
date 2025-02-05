import { html } from "../lib/lit-html.js";

const pricelistTemplate = () => html`
  <!DOCTYPE html>
  <html lang="bg">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ценоразпис</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Услуга</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Подмяна/ монтиране на контакт:</td>
              <td>10 лв. (+5лв. при някои видове двойни контакти)</td>
            </tr>
            <tr>
              <td>Подмяна/ монтиране на електрически ключ</td>
              <td>5 лв. (без значение дали е единичен или двоен)</td>
            </tr>
            <tr>
              <td>Подмяна/ монтиране на девиаторен електрически ключ</td>
              <td>7 лв.</td>
            </tr>
            <tr>
              <td>Подмяна/ монтиране на осветително тяло тип полилеи</td>
              <td>20 лв.</td>
            </tr>
            <tr>
              <td>Ремонт и свързване на електрически уреди</td>
              <td>20 лв. (+5лв. за пробиване на отвор, ако има нужда)</td>
            </tr>
            <tr>
              <td>Подмяна/ монтиране на осветително тяло тип плафон</td>
              <td>15 лв. (+5лв. за пробиване на отвор, ако има нужда)</td>
            </tr>
            <tr>
              <td>Подмяна/ монтиране на апартаментно електрическо табло</td>
              <td>25 лв. (+7лв. за всеки автоматичен предпазител)</td>
            </tr>
          </tbody>
        </table>
        <div class="disclaimer">
          <strong>Всички цени са без включени материали.</strong>
          <strong>Издавам фактура за съответната услуга.</strong>
        </div>
      </div>
      <script src="script.js"></script>
    </body>
  </html>
`;

export function funcPricelist(e) {
  e.render(pricelistTemplate());
}
