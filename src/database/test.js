const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-1.369602",
    lng: "-48.3486119",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9987677474747",
    images: [
      "https://images.unsplash.com/photo-1592840330988-3c88e47c1aac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/flagged/photo-1576042766640-62eacf463b9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha quando se sentir a vontade e trazer muito amor e paciência",
    opening_hours: "Horário de visitas das 18h até 8h",
    open_on_weekends: "1",
  });
  // consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
  //consultar somente pelo orfanato id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);
  //   // deletar dados da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "));
  console.log(await db.run("DELETE FROM orphanages WHERE id = '5' "));
});
