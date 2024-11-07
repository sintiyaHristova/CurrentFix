import { html } from '../lib/lit-html.js';


const contactTemplate = () => html`
<section class="contact" id="contact">
<form action="https://api.web3forms.com/submit" method="POST">
    <p>Вашето запитване:</p>
    <input type="hidden" name="access_key" value="da94bc67-5546-4de2-8d5a-cc40cd13799e">
    <textarea name="Телефонен номер:" class="box" placeholder="Телефонен номер:" id="" cols="30" rows="10" required></textarea>
    <textarea name="Съобщение:" class="box2" placeholder="Вашето съобщение:" id="" cols="30" rows="10" required></textarea>
    <input type="submit" value="Изпрати" class="btn">
  </form>
</section>`;

export function funcContact(е) {
  е.render(contactTemplate());
}
