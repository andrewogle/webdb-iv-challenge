exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          recipeId: 1,
          recipeName: "Smothered Chicken Breasts",
          quantity1:4,
          ingredient1: 1,
          quantity2:.25,
          ingredient2: 2,
          quantity3:.25,
          ingredient3: 3,
          quantity4:1,
          ingredient4: 4,
          quantity5:8,
          ingredient5: 5,
          quantity6:1,
          ingredient6: 6,
          quantity7:.25,
          ingredient7: 7,
          quantity8:.5,
          ingredient8: 8
        }
      ]);
    });
};
