const btnYritysesittely = document.getElementById('btn_yritysesittely');
const btnYhteystiedot = document.getElementById('btn_yhteystiedot');
const btnHenkilokunta = document.getElementById('btn_henkilokunta');
const main_area = document.getElementById('main_area');
const footer = document.getElementById('footer');
const baseUrl = 'http://localhost:3000';

btnYritysesittely.addEventListener('click', yritysesittely);
btnYhteystiedot.addEventListener('click', yhteystiedot);
btnHenkilokunta.addEventListener('click', henkilokunta);

yritysesittely();

function yritysesittely() {
    main_area.innerHTML = `
    <h2 class="mb-3">Yritysesittely</h2>
    <p>Careeria on suomalainen IT-alan rekrytointiyritys, joka tarjoaa monipuolisia palveluita työnhakijoille ja työnantajille. Yritys on erikoistunut IT-alan rekrytointiin ja tarjoaa palveluita, kuten työnhakijoiden arviointia, uraneuvontaa, koulutusta ja rekrytointipalveluita.</p>
    <p>Careeria auttaa työnhakijoita löytämään sopivia työpaikkoja IT-alalla ja tarjoaa työnantajille tehokkaita ratkaisuja rekrytointiprosessiin. Yrityksen tavoitteena on yhdistää oikeat ihmiset oikeisiin työpaikkoihin ja edistää IT-alan kasvua Suomessa.</p>
    `;
}

function yhteystiedot() {
    main_area.innerHTML = `
    <h2 class="mb-3">Yhteystiedot</h2>
    <p>Careeria Oy</p>
    <p>Osoite: Esimerkkikatu 1, 00100 Helsinki</p>
    <p>Puhelin: +358 123 456 789</p>
    <p>Sähköposti: info@careeria.fi</p>
    `;
}

async function henkilokunta() {
    main_area.innerHTML = "<h4>Loading...</h4>";
    try {
        const response = await fetch(`${baseUrl}/henkilokunta`);
        const data = await response.json();
        let html = `<h2 class="mb-3">Henkilökunta</h2>
        <div class="d-flex flex-wrap justify-content-center gap-3">`;
        data.forEach(person => {
            html += `
            <div class="card mb-3 text-center">
                <img src="${person.image}" alt="${person.name}">
                <div class="card-body">
                    <h5 class="card-title text-warning"><strong>${person.name}</strong></h5>
                    <p class="card-text text-primary">${person.position}</p>
                    <p class="card-text"><small class="text-muted">${person.email}</small></p>
                    <p class="card-text"><small class="text-muted">${person.phone}</small></p>
                </div>
            </div>
            `;
        });
        html += `</div>`;
        main_area.innerHTML = html;
    } catch (error) {
        main_area.innerHTML = `<h4>Error loading data: ${error.message}</h4>`;
    }
}

footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} Careeria Oy. All rights reserved.</p>
<p>Designed by Lauri Tikkanen</p><span id="clock"></span>
`;