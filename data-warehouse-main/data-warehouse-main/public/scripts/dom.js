const dom = {
  pop: `
  <div id='pop'>
    <div id='pop-container'></div>
  </div>`,
  response: "<span id='response'></span>",
  successIcon: "<i class='fas fa-check-circle'></i>",
  errorIcon: "<i class='fas fa-exclamation-circle'></i>",
  option: (data) => {
    return `<option value="${data.id}">${data.name}</option>`;
  },
  companiesPost: `
    <h2>Crea una nueva compañía</h2>
    <input id='company_name-post-input' type='text' placeholder='Nombre' autocomplete='off' />
    <input id='company_address-post-input' type='text' placeholder='Dirección' autocomplete='off' />
    <select id='company_post-city_id-select'></select>
    <input id='company_email-post-input' type='text' placeholder='Email' autocomplete='off' />
    <input id='company_phone_number-post-input' type='text' placeholder='Número de Teléfono' autocomplete='off' />
    <button id='company_save-post-btn'>Guardar</button>
    <div id='response-container'></div>`,
  contactPost: `
    <h2>Crea un nuevo contacto</h2>
    <input id='contact_first_name-post-input' type='text' placeholder='Nombre' autocomplete='off' />
    <input id='contact_last_name-post-input' type='text' placeholder='Apellido' autocomplete='off' />
    <select id='contact_post-city_id-select'></select>
    <select id='contact_post-company_id-select'></select>
    <input id='contact_role-post-input' type='text' placeholder='Rol' autocomplete='off' />
    <input id='contact_media-post-input' type='text' placeholder='Red/es favorita/s' autocomplete='off' />
    <label>Interés</label>
    <input id='contact_interest-post-input' type='range' min='0' max='100' step='25'/>
    <button id='contact_save-post-btn'>Guardar</button>
    <div id='response-container'></div>`,
  userPost: `
    <h2>Crea un nuevo usuario</h2>
    <input id='user_name-post-input' type='text' placeholder='Ingrese el nombre de usuario' autocomplete='off' />
    <input id='user_password-post-input' type='password' placeholder='Ingrese la contraseña' autocomplete='off' />
    <input id='user_password_repeat-post-input' type='password' placeholder='Repite la contraseña' autocomplete='off' />
    <button id='user_save-post-btn'>Guardar</button>
    <div id='response-container'></div>`,
  regionPost: `
    <h2>Crea una nueva región</h2>
    <input id='region_name-post-input' type='text' placeholder='Ingrese el nombre de la región' autocomplete='off' />
    <button id='region_save-post-btn'>Guardar</button>
    <div id='response-container'></div>`,
  countryPost: `
    <h2>Crea un nuevo país</h2>
    <input id='country_name-post-input' type='text' placeholder='Ingrese el nombre del país' autocomplete='off' />
    <select id="country_post-select"><option selected disabled>Seleccionar</option></select>
    <button id="country_save-post-btn">Guardar</button>
    <div id='response-container'></div>`,
  cityPost: `
    <h2>Crea una nueva ciudad</h2>
    <input id='city_name-post-input' type='text' placeholder='Ingrese el nombre de la ciudad' autocomplete='off' />
    <select id="city_post-select"><option selected disabled>Seleccionar</option></select>
    <button id="city_save-post-btn">Guardar</button>
    <div id='response-container'></div>`,
  putCompany: (name) => {
    return `
  <h2>Edita a ${name}</h2>
  <input id='company-new_name-put-input' type='text' placeholder='Nuevo nombre' autocomplete='off' />
  <input id='company-new_address-put-input' type='text' placeholder='Dirección' autocomplete='off' />
  <select id='company_put-new_city_id-select'></select>
  <input id='company-new_email-put-input' type='text' placeholder='Email' autocomplete='off' />
  <input id='company-new_phone_number-put-input' type='text' placeholder='Número de Teléfono' autocomplete='off' />
  <button id="company_save-put-btn">Guardar</button>
  <div id='response-container'></div>`;
  },
  putContact: (fullName) => {
    return `
  <h2>Edita a ${fullName}</h2>
  <input id='contact-new_first_name-put-input' type='text' placeholder='Nuevo nombre' autocomplete='off' />
  <input id='contact-new_last_name-put-input' type='text' placeholder='Apellido' autocomplete='off' />
  <select id='contact_put-new_city_id-select'></select>
  <select id='contact_put-new_company_id-select'></select>
  <input id='contact-new_role-put-input' type='text' placeholder='Rol' autocomplete='off' />
  <input id='contact-new_media-put-input' type='text' placeholder='Red/es favorita/s' autocomplete='off' />
  <label>Interés</label>
  <input id='contact-new_interest-put-input' type='range' min='0' max='100' step='25'/>
  <button id="contact_save-put-btn">Guardar</button>
  <div id='response-container'></div>`;
  },
  putUser: (name) => {
    return `
  <h2>Edita ${name}</h2>
  <input id='user-new_name-put-input' type='text' placeholder='Ingrese el nuevo nombre del usuario' autocomplete='off' />
  <input id='user-new_password-put-input' type='password' placeholder='Ingrese la nueva contraseña' autocomplete='off' />
  <button id="user_save-put-btn">Guardar</button>
  <div id='response-container'></div>`;
  },
  putRegion: (name) => {
    return `
  <h2>Edita ${name}</h2>
  <input id='region-new_name-put-input' type='text' placeholder='Ingrese el nuevo nombre de la región' autocomplete='off' />
  <button id="region_save-put-btn">Guardar</button>
  <div id='response-container'></div>`;
  },
  putCountry: (name) => {
    return `
  <h2>Edita ${name}</h2>
  <input id='country-new_name-put-input' type='text' placeholder='Ingrese el nuevo nombre del país' autocomplete='off' />
  <select id="country_put-select"><option selected disabled>Seleccionar</option></select>
  <button id="country_save-put-btn">Guardar</button>
  <div id='response-container'></div>`;
  },
  putCity: (name) => {
    return `
  <h2>Edita ${name}</h2>
  <input id='city-new_name-put-input' type='text' placeholder='Ingrese el nuevo nombre de la ciudad' autocomplete='off' />
  <select id="city_put-select"><option selected disabled>Seleccionar</option></select>
  <button id="city_save-put-btn">Guardar</button>
  <div id='response-container'></div>`;
  },
  table: (tableId, header, btnPostId) => {
    return `
    <ul id='${tableId}' class='table'>
      <li class='table-header'>
        <span>${header}</span>
        <div class='inputs'>
          <div class='inputs-hide'>
            <i class='fas fa-search'></i>
            <input type='text' placeholder='Buscar...'>
            <i id='${btnPostId}' class='fas fa-plus-square'></i>
          </div>
          <i expand='cities' class='fas fa-angle-down'></i>
        </div>
      </li>
    </ul>`;
  },
  tableDataCompanies: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>${data.address}</span>
        <span>${data.city_name}</span>
        <span>${data.email}</span>
        <span class='text_align-right'>${data.phone_number}</span>
      </div>
      <div>
        <i id="put-companies-${data.id}-${data.name}" class="fas fa-pencil-alt"></i>
        <i id="delete-companies-${data.id}-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  tableDataContacts: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.first_name} ${data.last_name}</span>
        <span>${data.city_name}</span>
        <span>${data.company_name}</span>
        <span>${data.role}</span>
        <span>${data.media}</span>
        <span class='interest${data.interest} text_align-right'>${data.interest}</span>
      </div>
      <div>
        <i id="put-contacts-${data.id}-${data.first_name} ${data.last_name}" class="fas fa-pencil-alt"></i>
        <i id="delete-contacts-${data.id}-${data.first_name} ${data.last_name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  tableDataUsers: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>rank: ${data.rank}</span>
      </div>
      <div>
        <i id="put-users-${data.id}-${data.name}" class="fas fa-pencil-alt"></i>
        <i id="delete-users-${data.id}-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  tableDataRegion: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
      </div>
      <div>
        <i id="put-regions-${data.id}-${data.name}" class="fas fa-pencil-alt"></i>
        <i id="delete-regions-${data.id}-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  tableDataCountry: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>${data.region_name}</span>
      </div>
      <div>
        <i id="put-countries-${data.id}-${data.name}" class="fas fa-pencil-alt"></i>
        <i id="delete-countries-${data.id}-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  tableDataCity: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>${data.country_name}</span>
        <span>${data.region_name}</span>
      </div>
      <div>
        <i id="put-cities-${data.id}-${data.name}" class="fas fa-pencil-alt"></i>
        <i id="delete-cities-${data.id}-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  confirm: `
  <h2>¿Desea continuar?</h2>
  <div>
    <button id='confirm-yes-btn'>CONTINUAR</button>
    <button id='confirm-no-btn'>CANCELAR</button>
  </div>
  <div id='response-container'></div>`,
};

export { dom };
