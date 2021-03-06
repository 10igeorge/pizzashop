describe('Pizza', function(){
    it("creates a new object based on user choices for pizza", function(){
      var testPizza = new Pizza("14", "Marinara Sauce", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew Cheese", "Tofu Ricotta Cheese"], 1)
      expect(testPizza.size).to.equal("14");
      expect(testPizza.sauce).to.equal("Marinara Sauce");
      expect(testPizza.toppings).to.eql(["Seitan Sausage", "Mushrooms"]);
      expect(testPizza.cheese).to.eql(["Creamed Cashew Cheese", "Tofu Ricotta Cheese"]);
      expect(testPizza.quantity).to.equal(1);
    });
    it("creates new pizza with base price of corresponding size", function(){
      var testPizza = new Pizza("14", "Marinara Sauce", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew Cheese", "Tofu Ricotta Cheese"], 1)
      expect(testPizza.basePrice()).to.eql([14.99]);
    });
    it("adds sauce price to base pizza user has selected", function() {
      var testPizza = new Pizza("14", "Marinara Sauce", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew Cheese", "Tofu Ricotta Cheese"], 1)
      expect(testPizza.addSauce()).to.eql([14.99, 0.5]);
    });
    it("adds toppings prices to base pizza user has selected", function() {
      var testPizza = new Pizza("14", "Marinara Sauce", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew Cheese", "Tofu Ricotta Cheese"], 1)
      expect(testPizza.addToppings()).to.eql([14.99, 0.5, 2.00, 0.50]);
    });
    it("adds cheese prices to base pizza user has selected", function() {
      var testPizza = new Pizza("14", "Marinara Sauce", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew Cheese", "Tofu Ricotta Cheese"], 1)
      expect(testPizza.addCheese()).to.eql([14.99, 0.5, 2, 0.50, 1.50, 1.50]);
    });
    it("returns the total price of the pizza after size, sauce, toppings, and cheese are added", function() {
      var testPizza = new Pizza("14", "Marinara Sauce", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew Cheese", "Tofu Ricotta Cheese"], 1)
      expect(testPizza.totalPrice()).to.eql(20.99);
    });
});
