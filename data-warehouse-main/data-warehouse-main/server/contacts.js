import { sequelize } from "./server.js";

const contacts = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS contacts;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS contacts (" +
        "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "first_name VARCHAR(50) NOT NULL, " +
        "last_name VARCHAR(50) NOT NULL, " +
        "city_id INT NOT NULL, " +
        "company_id INT NOT NULL, " +
        "role VARCHAR(50) NOT NULL, " +
        "media VARCHAR(100) NOT NULL, " +
        "interest INT NOT NULL, " +
        "FOREIGN KEY (city_id) REFERENCES cities (id) " +
        "ON DELETE CASCADE ON UPDATE CASCADE, " +
        "FOREIGN KEY (company_id) REFERENCES companies (id) " +
        "ON DELETE CASCADE ON UPDATE CASCADE);"
    );
  },
  insertInto: async () => {
    await sequelize.query(`
INSERT INTO contacts VALUES
(1, 'Jamesy', 'Sell', 2, 20, 'Supervisor', 'Adams-Terry', 0),
(2, 'Blithe', 'Newhouse', 9, 3, 'Electrician', 'Jaskolski Inc', 75),
(3, 'Lothario', 'Yarranton', 3, 22, 'Construction Foreman', 'Mann-D''Amore', 50),
(4, 'Goldy', 'Goacher', 5, 24, 'Surveyor', 'Kshlerin-Lind', 75),
(5, 'Maryanna', 'Huxtable', 7, 24, 'Construction Manager', 'Stark, Gottlieb and Becker', 50),
(6, 'Gherardo', 'Danforth', 7, 17, 'Architect', 'Schaefer and Sons', 25),
(7, 'Rozanna', 'Mea', 1, 26, 'Project Manager', 'Gulgowski LLC', 75),
(8, 'Alfi', 'Abrahams', 5, 15, 'Construction Worker', 'Waelchi and Sons', 75),
(9, 'Emmett', 'Niesel', 8, 20, 'Electrician', 'Armstrong LLC', 50),
(10, 'Bride', 'Ginger', 7, 24, 'Subcontractor', 'Reichel and Sons', 100),
(11, 'Maye', 'MacKellar', 5, 5, 'Estimator', 'Williamson Inc', 25),
(12, 'Daisey', 'Astbery', 3, 9, 'Estimator', 'Rolfson Group', 75),
(13, 'Valene', 'Lamplugh', 2, 24, 'Surveyor', 'Gleichner LLC', 50),
(14, 'April', 'Leonida', 3, 30, 'Construction Manager', 'Kiehn and Sons', 25),
(15, 'Kienan', 'Meran', 7, 26, 'Project Manager', 'Mayer, Schamberger and Jacobs', 25),
(16, 'Dinah', 'Bolsover', 2, 21, 'Electrician', 'Bogan LLC', 25),
(17, 'Jeffy', 'Hearnshaw', 4, 15, 'Surveyor', 'Hickle-Haley', 75),
(18, 'Gwynne', 'Delacote', 1, 7, 'Engineer', 'Hyatt Inc', 75),
(19, 'Andrew', 'Klee', 6, 16, 'Construction Manager', 'West-Keeling', 25),
(20, 'Lucille', 'Shatliffe', 5, 26, 'Subcontractor', 'Moen LLC', 100),
(21, 'Brigida', 'Yerlett', 3, 16, 'Construction Expeditor', 'Gibson-Cartwright', 100),
(22, 'Sanson', 'Torvey', 9, 8, 'Construction Foreman', 'Bauch, Farrell and Crooks', 50),
(23, 'Emalia', 'Storrar', 4, 20, 'Construction Manager', 'Thompson-Denesik', 0),
(24, 'Myrvyn', 'Parman', 10, 7, 'Construction Foreman', 'Bashirian-Renner', 75),
(25, 'Elwyn', 'Mattei', 8, 17, 'Construction Manager', 'Pollich and Sons', 25),
(26, 'Georas', 'Kyd', 7, 12, 'Construction Expeditor', 'Tromp-Jacobi', 0),
(27, 'Toby', 'Atkins', 4, 1, 'Construction Expeditor', 'Schmeler, Moore and Cummerata', 25),
(28, 'Dawna', 'Eliassen', 4, 4, 'Construction Expeditor', 'Swaniawski-Dickinson', 0),
(29, 'Eleonore', 'Trussler', 8, 9, 'Subcontractor', 'Casper, Aufderhar and Medhurst', 50),
(30, 'Galina', 'Monteaux', 8, 3, 'Estimator', 'Wiegand-Cummerata', 50),
(31, 'Jerrie', 'Blowen', 6, 1, 'Surveyor', 'Cruickshank-Luettgen', 50),
(32, 'Bunni', 'Dimond', 6, 2, 'Engineer', 'Schuppe, Grimes and Kreiger', 50),
(33, 'Flore', 'Guess', 7, 21, 'Construction Expeditor', 'MacGyver, Wintheiser and Treutel', 25),
(34, 'Shanon', 'Denton', 7, 28, 'Estimator', 'Boyer-Beatty', 25),
(35, 'Cordelie', 'Stefanovic', 9, 25, 'Architect', 'Reilly, Shields and Mayer', 75),
(36, 'Nikki', 'Postgate', 9, 9, 'Construction Worker', 'Hills-Ledner', 75),
(37, 'Karry', 'Northedge', 8, 11, 'Construction Expeditor', 'Leuschke-Bergstrom', 25),
(38, 'Barbi', 'McBlain', 4, 22, 'Supervisor', 'Nader-Zieme', 25),
(39, 'Waring', 'Simonazzi', 3, 21, 'Project Manager', 'Schmidt LLC', 50),
(40, 'Obadias', 'Evensden', 7, 4, 'Architect', 'Powlowski-Jast', 0),
(41, 'Devora', 'Yaneev', 6, 27, 'Construction Manager', 'Bartell, Boyle and Grady', 75),
(42, 'Birgit', 'Dufour', 2, 20, 'Estimator', 'Blick-Hickle', 50),
(43, 'Karna', 'Spandley', 7, 21, 'Architect', 'VonRueden-Nader', 100),
(44, 'Hoebart', 'Hebbs', 10, 10, 'Surveyor', 'Lueilwitz-Becker', 50),
(45, 'Lancelot', 'Sugars', 1, 24, 'Architect', 'Boyer, Ryan and Kuvalis', 50),
(46, 'Leesa', 'Paullin', 10, 13, 'Construction Expeditor', 'Keebler-Witting', 50),
(47, 'Uri', 'Valler', 9, 16, 'Construction Worker', 'Gerlach-Wyman', 50),
(48, 'Milo', 'Carrington', 8, 15, 'Subcontractor', 'Mitchell, Stehr and Gerhold', 0),
(49, 'Dominique', 'Dally', 1, 3, 'Supervisor', 'Hyatt, Turner and Wolff', 75),
(50, 'Krissie', 'Berard', 7, 3, 'Construction Worker', 'Bauch, Predovic and Orn', 0),
(51, 'Mella', 'Edmott', 1, 1, 'Architect', 'Heaney-Lehner', 75),
(52, 'Hallsy', 'Heiss', 6, 13, 'Construction Worker', 'Kozey, Friesen and Reichel', 100),
(53, 'Patrick', 'Fallen', 7, 1, 'Electrician', 'Yost, Waelchi and Gerlach', 25),
(54, 'Conroy', 'Casaccio', 10, 17, 'Architect', 'Miller Inc', 75),
(55, 'Westleigh', 'L''Hommee', 9, 13, 'Supervisor', 'Schinner, King and Braun', 100),
(56, 'Theo', 'Elwin', 6, 1, 'Construction Foreman', 'Wisozk LLC', 50),
(57, 'Violet', 'Saw', 10, 11, 'Project Manager', 'Flatley, Tromp and Kunze', 50),
(58, 'Land', 'Leward', 10, 5, 'Construction Worker', 'Marvin-Kuhlman', 0),
(59, 'Wallie', 'Amsberger', 8, 6, 'Supervisor', 'Runolfsdottir, Sanford and Considine', 25),
(60, 'Hettie', 'Lunny', 7, 15, 'Construction Foreman', 'White LLC', 25),
(61, 'Mikey', 'Fausset', 5, 28, 'Construction Worker', 'Carter, Hintz and Swaniawski', 50),
(62, 'Ethelin', 'Seedhouse', 6, 22, 'Construction Worker', 'Reynolds, Hyatt and McGlynn', 75),
(63, 'Sarah', 'Shaw', 4, 7, 'Construction Worker', 'Armstrong, Glover and Toy', 50),
(64, 'Cassey', 'Jobin', 6, 24, 'Construction Expeditor', 'Wisoky, McDermott and Macejkovic', 75),
(65, 'Allen', 'Dunn', 1, 1, 'Construction Foreman', 'Ratke, Schiller and Kohler', 25),
(66, 'Richmound', 'Smoote', 3, 23, 'Construction Foreman', 'Bode-Gleichner', 75),
(67, 'Kearney', 'Nairy', 8, 19, 'Architect', 'Cartwright and Sons', 50),
(68, 'Rollin', 'Leete', 7, 16, 'Construction Foreman', 'Durgan LLC', 50),
(69, 'Devondra', 'Denham', 5, 13, 'Estimator', 'Haley, Beahan and Batz', 0),
(70, 'Svend', 'Semiras', 4, 25, 'Project Manager', 'Stiedemann, Hammes and VonRueden', 50),
(71, 'Sela', 'Sedgwick', 8, 6, 'Estimator', 'Grady, Greenfelder and Lemke', 50),
(72, 'Muhammad', 'O''Brien', 2, 30, 'Supervisor', 'Koch, Halvorson and Barrows', 0),
(73, 'Steffen', 'Warnes', 4, 29, 'Construction Worker', 'Goldner, Johnston and Vandervort', 25),
(74, 'Edsel', 'Clarridge', 9, 28, 'Project Manager', 'Kreiger-Schneider', 100),
(75, 'Bernette', 'Fuidge', 4, 17, 'Supervisor', 'Satterfield-Grimes', 50),
(76, 'Gav', 'Ackerley', 3, 24, 'Supervisor', 'Bradtke, Medhurst and Morissette', 25),
(77, 'Mildred', 'Sails', 8, 30, 'Electrician', 'Klocko-O''Reilly', 75),
(78, 'Amos', 'Faint', 7, 3, 'Estimator', 'Kulas, Torphy and Schowalter', 0),
(79, 'Efrem', 'Thornbarrow', 2, 7, 'Project Manager', 'Hamill-Moen', 75),
(80, 'Donia', 'Dunbobbin', 2, 6, 'Subcontractor', 'Franecki-Schaden', 25),
(81, 'Odessa', 'Rush', 4, 26, 'Project Manager', 'Sauer LLC', 100),
(82, 'Ev', 'Wasteney', 3, 22, 'Estimator', 'Homenick-Ullrich', 50),
(83, 'Skyler', 'Mackison', 5, 16, 'Construction Worker', 'Brown and Sons', 0),
(84, 'Lorelei', 'Bresnen', 6, 19, 'Estimator', 'Mayer LLC', 25),
(85, 'Sherrie', 'Delnevo', 6, 14, 'Estimator', 'Larkin, Rau and Nienow', 0),
(86, 'Sanson', 'Kemp', 3, 20, 'Construction Expeditor', 'Huels Inc', 75),
(87, 'Wynny', 'Greet', 4, 25, 'Estimator', 'Paucek-Block', 75),
(88, 'Rickey', 'Griniov', 4, 11, 'Engineer', 'Hagenes-McLaughlin', 25),
(89, 'Nelly', 'Naisbet', 6, 23, 'Subcontractor', 'Weimann Inc', 25),
(90, 'Kendra', 'McFetridge', 5, 8, 'Electrician', 'Carter, Hagenes and Doyle', 100),
(91, 'Patten', 'De Few', 7, 10, 'Engineer', 'Considine, Simonis and Aufderhar', 25),
(92, 'Pembroke', 'Mateus', 1, 24, 'Architect', 'Pouros-Kozey', 100),
(93, 'Montgomery', 'Ousley', 9, 22, 'Estimator', 'Hamill, Bradtke and McCullough', 100),
(94, 'Hussein', 'Rowntree', 7, 11, 'Construction Manager', 'Dach, Renner and Haag', 50),
(95, 'Noreen', 'Mayhew', 4, 15, 'Electrician', 'Medhurst and Sons', 75),
(96, 'Gale', 'Bourges', 10, 4, 'Construction Foreman', 'McCullough-Monahan', 25),
(97, 'Angelique', 'Crosetti', 7, 28, 'Construction Manager', 'Mitchell and Sons', 0),
(98, 'Maris', 'Robertucci', 3, 7, 'Subcontractor', 'Wyman, Reichert and Abshire', 75),
(99, 'Valene', 'Leyson', 4, 14, 'Construction Manager', 'Purdy LLC', 25),
(100, 'Conant', 'McParlin', 6, 5, 'Construction Manager', 'Moore LLC', 100);`);
  },
  findAll: async () => {
    return await sequelize.query(
      "SELECT contacts.id AS id, contacts.first_name AS first_name, " +
        "contacts.last_name AS last_name, cities.name AS city_name, companies.name AS company_name, " +
        "contacts.role AS role, contacts.media AS media, contacts.interest AS interest " +
        "FROM contacts INNER JOIN cities ON cities.id = contacts.city_id " +
        "INNER JOIN companies ON companies.id = contacts.company_id;",
      { type: "SELECT" }
    );
  },
  findById: async (data) => {
    return await sequelize.query("SELECT * FROM contacts WHERE id = ?;", {
      replacements: [data.id],
      type: "SELECT",
    });
  },
  findByFullName: async (data) => {
    return await sequelize.query("SELECT * FROM contacts WHERE first_name = ? AND last_name = ?;", {
      replacements: [data.first_name, data.last_name],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query(
      "INSERT INTO contacts " +
        "(first_name, last_name, city_id, company_id, role, media, interest) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?);",
      {
        replacements: [
          data.first_name,
          data.last_name,
          data.city_id,
          data.company_id,
          data.role,
          data.media,
          data.interest,
        ],
      }
    );
  },
  deleteById: async (data) => {
    await sequelize.query("DELETE FROM contacts WHERE id = ?;", {
      replacements: [data.id],
    });
  },
  put: async (data) => {
    await sequelize.query(
      "UPDATE contacts SET " +
        "first_name = ?, last_name = ?, city_id = ?, company_id = ?, role = ?, media = ?, interest = ? " +
        "WHERE id = ?;",
      {
        replacements: [
          data.first_name,
          data.last_name,
          data.city_id,
          data.company_id,
          data.role,
          data.media,
          data.interest,
          data.id,
        ],
      }
    );
  },
};

export { contacts };
