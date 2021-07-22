import dotenv from "dotenv";

dotenv.config();

console.log('Isi dari "POSTGRE_URL" adalah:', process.env.POSTGRE_URL);
console.log(
  'Isi dari "POSTGRE_USERNAME" adalah:',
  process.env.POSTGRE_USERNAME
);
console.log(
  'Isi dari "POSTGRE_PASSWORD" adalah:',
  process.env.POSTGRE_PASSWORD
);
console.log(
  'Isi dari "POSTGRE_DATABASE" adalah:',
  process.env.POSTGRE_DATABASE
);

console.log(
  '\nJika isi dari konfigurasi adalah "undefined", jangan lupa untuk membuat duplikasi berkas example.env dengan nama .env'
);
console.log(
  'Cobalah untuk mengganti value (setelah tanda "=") pada berkas .env kemudian jalankan lagi aplikasi ini.'
);
