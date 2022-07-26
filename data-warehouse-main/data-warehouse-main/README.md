# Data-Warehouse

## [Pla Benjamin](https://www.linkedin.com/in/benjamin-pla/)

### You will need

- [XAMPP](https://www.apachefriends.org/es/index.html)

### Step by step

1. Clone GitHub repository. _You can run this command on your console_

```
git clone https://github.com/benjaminPla/data-warehouse.git
```

2. Install all necesary packages. _You can run this command on your console_

```
npm i
```

3. Create 'data_warehouse' DATABASE from XAMPP. \_You can run this code on the SQL section\*

```
CREATE DATABASE IF NOT EXISTS data_warehouse;
```

4. Start the server. _You can run this command on your console_

```
npm start
```

**If you have troubles connecting to the server try changing the USERNAME to "root" on line 5 at 'server.js' file**

5. Open the link below from your browser

```
http://127.0.0.1:5500/public/index.html
```

### Notes

const superAdmin =
{
user_name : 'super admin'
password: '1234'
}
