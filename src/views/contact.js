import { html } from "../lib/lit-html.js";

const contactTemplate = () => html`
  <section class="contact" id="contact">
    <form action="https://formspree.io/f/xyzkdwyy" method="POST" id="contactForm">
      <p>Вашето запитване:</p>
      <textarea
        name="Телефонен номер:"
        class="box"
        placeholder="Телефонен номер:"
        cols="30"
        rows="10"
        required
      ></textarea>
      <textarea
        name="Съобщение:"
        class="box2"
        placeholder="Вашето съобщение:"
        cols="30"
        rows="10"
        required
      ></textarea>
      <input type="submit" value="Изпрати" class="btn" />
    </form>
  </section>
`;

export async function funcContact(e) {
  try {
    e.render(contactTemplate());
  } catch (error) {
    console.error("Грешка при зареждането на контактната форма:", error);
  }
}
