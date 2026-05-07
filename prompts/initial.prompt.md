You are my senior product designer, UX writer, SEO specialist, and Astro front-end developer.

Your task is to design and implement a complete, elegant, calm, trustworthy one-page website for a psychologist: Monika Lewicka.

The website should be a static onepager with:
- top navigation menu with anchor links,
- hero section,
- “O mnie” / bio section,
- “Dla kogo” section,
- “Zakres wsparcia” section,
- “Jak pracuję” section,
- pricing section,
- contact section,
- footer.

Tech requirements:
- Use Astro.
- Prefer a single static Astro page: `src/pages/index.astro`.
- Do not use React unless absolutely necessary. This website should be fully static.
- Use clean semantic HTML and scoped CSS inside the Astro file.
- No heavy dependencies.
- No animation libraries.
- The page should work well without JavaScript.
- Make it responsive: mobile first, then tablet and desktop.
- Optimize for Lighthouse: performance, accessibility, SEO, best practices.
- Use accessible color contrast.
- Add smooth scrolling only if it does not hurt accessibility.
- Add proper SEO metadata: title, description, canonical placeholder, Open Graph tags.
- Add JSON-LD structured data if reasonable, for a local professional service / psychologist.
- Do not invent medical claims.
- Do not describe the service as psychotherapy unless the content explicitly says so. Use “konsultacje psychologiczne” and “wsparcie psychologiczne”.
- Add a gentle disclaimer that the scope of support is consistent with professional competencies and that in emergency/life-threatening situations the user should contact emergency services or crisis support.

Design direction:
The visual style should be calm, warm, minimal, premium but not cold. It should feel like “oddech”, safety, trust, privacy, and a quiet conversation space.

Avoid:
- aggressive contrasts,
- loud gradients,
- generic medical blue,
- stock-photo-clinic feeling,
- cheesy brain/heart icons,
- overly corporate consulting style,
- too much decorative clutter.

Color palette:
- warm white / off-white background,
- light beige / sand,
- sage green,
- muted navy / deep graphite,
- powder taupe / cappuccino.

Suggested CSS variables:
- --color-bg: #FAF7F1;
- --color-surface: #FFFFFF;
- --color-sand: #E8DDCD;
- --color-sage: #A9B8A3;
- --color-sage-dark: #6F7F68;
- --color-graphite: #263238;
- --color-navy-muted: #2F3A46;
- --color-taupe: #B8A89A;
- --color-text: #2A2A2A;
- --color-muted: #6D6A66;

Typography:
- Use elegant system fonts or a tasteful combination.
- If using external fonts, keep it minimal and performant.
- The overall feeling should be soft, readable, and professional.
- Headings may be slightly editorial/elegant.
- Body text should be very readable.

Business context:
This is a personal website / online business card for a psychologist named Monika Lewicka.

Main positioning:
Monika Lewicka is a psychologist supporting adults in dealing with stress, overload, life changes, and professional changes. She has many years of experience in business, marketing, PR, advertising, and communication, including work for advertising agencies and financial institutions. This helps her understand the challenges of modern professional life: pressure, speed, responsibility, overload, and burnout.

Tone of voice:
- calm,
- human,
- warm,
- professional,
- non-salesy,
- not too emotional,
- trustworthy,
- simple Polish,
- no exaggerated promises,
- no “naprawię Twoje życie” language.

Source content from the client:

BIO longer:
“Jestem psychologiem wspierającym osoby dorosłe w radzeniu sobie z przeciążeniem, stresem oraz zmianami życiowymi i zawodowymi.

Przez wiele lat pracowałam w środowisku biznesowym, realizując projekty z zakresu komunikacji, reklamy, PR i marketingu dla agencji reklamowych oraz instytucji finansowych. Doświadczenie pracy w wymagającym i dynamicznym świecie biznesu pozwala mi lepiej zrozumieć wyzwania współczesnego życia — presję, tempo, odpowiedzialność i wypalenie.

W pracy psychologicznej ważne są dla mnie uważność, autentyczna relacja oraz stworzenie bezpiecznej przestrzeni do rozmowy. Wierzę, że czasem największą zmianę przynosi nie pośpiech i ciągłe wymagania wobec siebie, ale zatrzymanie się i lepsze zrozumienie własnych potrzeb.”

BIO shorter:
“Psycholog wspierający osoby dorosłe w radzeniu sobie ze stresem, przeciążeniem i zmianami życiowymi.

Doświadczenie zdobywałam przez wiele lat pracy w biznesie; marketingu i PR instytucji finansowych. Dzięki temu dobrze rozumiem wyzwania współczesnego świata — tempo życia, presję i potrzebę odnalezienia równowagi. Zapraszam do kontaktu.”

Scope of services:
- konsultacje psychologiczne dla osób dorosłych,
- wsparcie psychologiczne w sytuacjach kryzysowych,
- pomoc w radzeniu sobie ze stresem i przeciążeniem,
- wsparcie w zmianach życiowych i zawodowych,
- psychoedukacja,
- rozwój kompetencji emocjonalnych,
- wsparcie osób doświadczających wypalenia zawodowego,
- konsultacje dotyczące relacji interpersonalnych,
- wsparcie w budowaniu równowagi między życiem zawodowym a prywatnym,
- pomoc w obniżonym samopoczuciu i trudnościach emocjonalnych.

Required note:
“Zakres udzielanego wsparcia jest zgodny z moimi kompetencjami i przygotowaniem zawodowym. W razie potrzeby rekomenduję kontakt z odpowiednimi specjalistami lub ośrodkami wsparcia.”

Missing data:
The client will provide email later. For now use placeholders:
- email: kontakt@monikalewicka.pl
- phone: +48 000 000 000
- location: Warszawa / konsultacje online
- booking link: `#kontakt`
Make these placeholders easy to find and replace in the code.

Pricing:
Create a pricing section with clear, calm copy. Mark it as “Proponowany cennik” or “Cennik” but write the copy in a way that can be easily changed later.

Use these suggested prices:
1. Konsultacja psychologiczna — 50 min — 250 zł
2. Konsultacja psychologiczna online — 50 min — 230 zł
3. Pierwsza konsultacja / rozmowa wstępna — 50 min — 250 zł
4. Konsultacja wsparciowa w sytuacji przeciążenia lub kryzysu — 50 min — 250 zł
5. Psychoedukacja / rozwój kompetencji emocjonalnych — 50 min — 250 zł

Add a small note:
“Cennik ma charakter informacyjny. Ostateczny zakres i forma wsparcia ustalane są indywidualnie.”

Important:
Do not include services for couples, children, diagnosis, psychiatric care, certificates, opinions, tests, or psychotherapy unless explicitly provided.
Do not overpromise outcomes.
Do not use phrases like “leczenie depresji” unless the client confirms that this is appropriate.

Suggested page structure:

1. Header / navigation
Menu links:
- O mnie
- W czym pomagam
- Jak pracuję
- Cennik
- Kontakt

CTA button:
“Umów konsultację”

2. Hero
Create a strong, calm hero headline in Polish. Example direction:
“Wsparcie psychologiczne w stresie, przeciążeniu i zmianie”
Subheadline:
“Konsultacje psychologiczne dla osób dorosłych, które potrzebują zatrzymania, rozmowy i lepszego zrozumienia swoich potrzeb.”
CTA buttons:
- “Umów konsultację”
- “Poznaj zakres wsparcia”

Add a small trust line:
“Dla osób dorosłych · Warszawa / online · spokojna przestrzeń do rozmowy”

3. O mnie
Use the longer BIO, lightly edited for website readability.
Add a highlighted quote or callout:
“Czasem największą zmianę przynosi nie pośpiech, ale zatrzymanie się i lepsze zrozumienie własnych potrzeb.”

4. Dla kogo
Create cards or a clean list:
- Dla osób, które czują przeciążenie i napięcie.
- Dla osób doświadczających stresu zawodowego.
- Dla osób w zmianie życiowej lub zawodowej.
- Dla osób, które chcą lepiej rozumieć swoje emocje i potrzeby.
- Dla osób szukających większej równowagi między pracą a życiem prywatnym.

5. Zakres wsparcia
Use the provided service list.
Group it visually into 2 or 3 columns/cards if it improves readability.

6. Jak pracuję
Describe the working style:
- uważność,
- autentyczna relacja,
- bezpieczna przestrzeń,
- spokojna rozmowa,
- szacunek dla tempa klienta,
- praktyczne rozumienie presji współczesnego życia i pracy.

Make it sound grounded, not mystical.

7. Cennik
Use the proposed pricing above.
Create simple pricing cards or a clean table.
The design should be subtle, no aggressive sales boxes.

8. Kontakt
Use placeholders:
- Email: kontakt@monikalewicka.pl
- Telefon: +48 000 000 000
- Lokalizacja: Warszawa / online
CTA:
“Wyślij wiadomość”
Use a mailto link.
Do not create a backend form unless explicitly requested.
You may include a simple static contact block instead of a form to avoid GDPR/form-processing complexity.

Contact copy:
“Jeśli chcesz umówić konsultację lub zapytać o możliwość spotkania, napisz kilka słów o tym, czego potrzebujesz. Odpowiem z informacją o dostępnych terminach.”

9. Footer
Include:
- Monika Lewicka — Psycholog
- placeholders for privacy policy link
- copyright
- short emergency disclaimer:
“Strona nie służy do udzielania pomocy w stanach bezpośredniego zagrożenia życia lub zdrowia. W sytuacji nagłej skontaktuj się z numerem alarmowym 112 lub najbliższym ośrodkiem pomocy kryzysowej.”

Implementation details:
- Create polished CSS.
- Use CSS variables.
- Use sections with `id` anchors.
- Use accessible buttons/links.
- Ensure menu works on mobile. A simple responsive stacked header is enough; no complex JS hamburger required unless needed.
- Use cards, subtle borders, soft shadows, large spacing, rounded corners.
- Keep the design airy.
- Add decorative abstract shapes only with CSS, very subtle.
- No images are required. If you use image placeholders, make them optional and easy to replace.
- The page should look complete even without a portrait photo.

Deliverables:
1. Implement the Astro page.
2. Make the content polished in Polish.
3. Add comments in the code where contact data, pricing, and legal links should be replaced.
4. After implementation, explain briefly:
   - what files were changed,
   - where to replace email/phone/prices,
   - how to run the project locally.