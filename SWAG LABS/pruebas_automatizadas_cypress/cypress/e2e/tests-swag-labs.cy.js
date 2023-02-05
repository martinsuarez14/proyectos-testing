
/// <reference types="cypress" />

describe('Validar el ingreso a la página con usuario y contraseña de la descripción', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Prueba resgistro de usuario', () => {
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should("be.visible")
    cy.get('.app_logo').should("be.visible")
    cy.get('.shopping_cart_link').should("be.visible")
    cy.get('.peek').should("be.visible")
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should("be.visible")
    cy.get('.footer').should("be.visible")
    cy.get('.social_twitter > a').should("be.visible")
    cy.get('.social_facebook > a').should("be.visible")
    cy.get('.social_linkedin > a').should("be.visible")
    cy.get('.inventory_list > :nth-child(1)').should("be.visible")
  })

  it("Comprobar los campos obligatorios", () => {
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should("be.visible")
    cy.get('.error-message-container').contains("Epic sadface: Username is required")
  })

  it('Comprobar que no acceda con usuarios aleatorios', () => {
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("usuario_secreto")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should("be.visible")
    cy.get('.error-message-container').should("be.visible")
  })
})

describe('Validar compra realizada', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Compra de un objeto', () => {
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').should("be.visible")
    cy.get('.shopping_cart_badge').contains("1")
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should("be.visible")
    cy.get('.cart_quantity_label').should("be.visible")
    cy.get('.cart_list').should("be.visible")
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
    cy.get('[data-test="continue-shopping"]').should("be.visible")
    cy.get('[data-test="checkout"]').should("be.visible")
    cy.get('[data-test="checkout"]').click()
    cy.get('.title').should("be.visible")
    cy.get('[data-test="firstName"]').should("be.visible").type("Alberto")
    cy.get('[data-test="lastName"]').should("be.visible").type("Rojas")
    cy.get('[data-test="postalCode"]').should("be.visible").type("3560")
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.cart_item').should("be.visible")
    cy.get('.summary_info > :nth-child(1)').should("be.visible")
    cy.get('.summary_info > :nth-child(3)').should("be.visible")
    cy.get('.summary_subtotal_label').should("be.visible").contains("Item total:")
    cy.get('.summary_total_label').should("be.visible").contains("Total:")
    cy.get('[data-test="cancel"]').should("be.visible")
    cy.get('[data-test="finish"]').should("be.visible").click()
    cy.get('.title').should("be.visible")
    cy.get('.complete-header').should("be.visible").contains("THANK YOU FOR YOUR ORDER")
    cy.get('.complete-text').should("be.visible").contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    cy.get('.pony_express').should("be.visible")
    cy.get('[data-test="back-to-products"]').should("be.visible").click()
    cy.get('.app_logo').should("be.visible")
    cy.get('.title').should("be.visible")
  })

  it('Comprar todos los productos de la tienda', () => {
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should("be.visible")
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_link').should("be.visible")
    cy.get('.shopping_cart_badge').contains("6")
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should("be.visible")
    cy.get('.cart_quantity_label').should("be.visible")
    cy.get('.cart_list').should("be.visible")
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
    cy.get('[data-test="continue-shopping"]').should("be.visible")
    cy.get('[data-test="checkout"]').should("be.visible")
    cy.get('[data-test="checkout"]').click()
    cy.get('.title').should("be.visible")
    cy.get('[data-test="firstName"]').should("be.visible").type("Alberto")
    cy.get('[data-test="lastName"]').should("be.visible").type("Rojas")
    cy.get('[data-test="postalCode"]').should("be.visible").type("3560")
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.cart_item').should("be.visible")
    cy.get('.summary_info > :nth-child(1)').should("be.visible")
    cy.get('.summary_info > :nth-child(3)').should("be.visible")
    cy.get('.summary_subtotal_label').should("be.visible").contains("Item total:")
    cy.get('.summary_total_label').should("be.visible").contains("Total:")
    cy.get('[data-test="cancel"]').should("be.visible")
    cy.get('[data-test="finish"]').should("be.visible").click()
    cy.get('.title').should("be.visible")
    cy.get('.complete-header').should("be.visible").contains("THANK YOU FOR YOUR ORDER")
    cy.get('.complete-text').should("be.visible").contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    cy.get('.pony_express').should("be.visible")
    cy.get('[data-test="back-to-products"]').should("be.visible").click()
    cy.get('.app_logo').should("be.visible")
    cy.get('.title').should("be.visible")
  })

  it('Validar que podamos cancelar una compra', () => {
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should("be.visible")
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_link').should("be.visible")
    cy.get('.shopping_cart_badge').contains("6")
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should("be.visible")
    cy.get('.cart_quantity_label').should("be.visible")
    cy.get('.cart_list').should("be.visible")
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
    cy.get('[data-test="continue-shopping"]').should("be.visible")
    cy.get('[data-test="checkout"]').should("be.visible")
    cy.get('[data-test="checkout"]').click()
    cy.get('.title').should("be.visible")
    cy.get('[data-test="firstName"]').should("be.visible").type("Alberto")
    cy.get('[data-test="lastName"]').should("be.visible").type("Rojas")
    cy.get('[data-test="postalCode"]').should("be.visible").type("3560")
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.cart_item').should("be.visible")
    cy.get('.summary_info > :nth-child(1)').should("be.visible")
    cy.get('.summary_info > :nth-child(3)').should("be.visible")
    cy.get('.summary_subtotal_label').should("be.visible").contains("Item total:")
    cy.get('.summary_total_label').should("be.visible").contains("Total:")
    cy.get('[data-test="cancel"]').should("be.visible")
    cy.get('[data-test="cancel"]').click()
    cy.get('.app_logo').should("be.visible")
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should("be.visible")
  })

  it('Validar que podamos agregar productos al carrito', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('.shopping_cart_badge').contains("3")
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="continue-shopping"]').should("be.visible")
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('.app_logo').should("be.visible")
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('.shopping_cart_badge').contains("5")
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').should("be.visible")
    cy.get('[data-test="checkout"]').click()
    cy.get('.title').should("be.visible")
    cy.get('[data-test="firstName"]').should("be.visible").type("Alberto")
    cy.get('[data-test="lastName"]').should("be.visible").type("Rojas")
    cy.get('[data-test="postalCode"]').should("be.visible").type("3560")
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.cart_item').should("be.visible")
    cy.get('.summary_info > :nth-child(1)').should("be.visible")
    cy.get('.summary_info > :nth-child(3)').should("be.visible")
    cy.get('.summary_subtotal_label').should("be.visible").contains("Item total:")
    cy.get('.summary_total_label').should("be.visible").contains("Total:")
    cy.get('[data-test="cancel"]').should("be.visible")
    cy.get('[data-test="finish"]').should("be.visible").click()
    cy.get('.title').should("be.visible")
    cy.get('.complete-header').should("be.visible").contains("THANK YOU FOR YOUR ORDER")
    cy.get('.complete-text').should("be.visible").contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    cy.get('.pony_express').should("be.visible")
    cy.get('[data-test="back-to-products"]').should("be.visible").click()
    cy.get('.app_logo').should("be.visible")
    cy.get('.title').should("be.visible")
  })

  it('Validar poder remover productos', () => {

    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should("be.visible")
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_link').should("be.visible")
    cy.get('.shopping_cart_badge').contains("6")
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should("be.visible")
    cy.get('.cart_quantity_label').should("be.visible")
    cy.get('.cart_list').should("be.visible")
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
    cy.get('[data-test="continue-shopping"]').should("be.visible")
    cy.get('[data-test="checkout"]').should("be.visible")
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible").click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should("be.visible").click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should("be.visible").click()
    cy.get('.cart_list > :nth-child(3)').should("not.be.visible")
    cy.get('.cart_list > :nth-child(4)').should("not.be.visible")
    cy.get('.cart_list > :nth-child(5)').should("not.be.visible")
    cy.get('[data-test="checkout"]').should("be.visible")
  })

  it('Validar campos obligatorios de nombre, apellido y codigo postal', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('.shopping_cart_badge').contains("3")
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').should("be.visible")
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.error-message-container').should("be.visible")
    cy.get('[data-test="error"]').contains('Error: First Name is required')
    cy.get('[data-test="firstName"]').should("be.visible").type("Alberto")
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.error-message-container').should("be.visible")
    cy.get('[data-test="error"]').contains('Error: Last Name is required')
    cy.get('[data-test="lastName"]').should("be.visible").type("Rojas")
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.error-message-container').should("be.visible")
    cy.get('[data-test="error"]').contains('Error: Postal Code is required')
    cy.get('[data-test="postalCode"]').should("be.visible").type("3560")
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get('.title').should('be.visible')
  })

})

describe('Navegación de la página', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Validar el reordenamiento de los productos según criterio', () => {
    // COMPROBAR DE LA A - Z
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()

    cy.get(':nth-child(1) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(1) > .inventory_item_description').contains('Sauce Labs Backpack')
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(2) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(2) > .inventory_item_description').contains("Sauce Labs Bike Light")
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(3) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(3) > .inventory_item_description').contains("Sauce Labs Bolt T-Shirt")
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(4) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(4) > .inventory_item_description').contains("Sauce Labs Fleece Jacket")
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(5) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(5) > .inventory_item_description').contains("Sauce Labs Onesie")
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(6) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(6) > .inventory_item_description').contains("Test.allTheThings() T-Shirt (Red)")
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")

    // COMPROBAR DE LA Z - A
    cy.get('[data-test="product_sort_container"]').select(1)


    cy.get(':nth-child(1) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(1) > .inventory_item_description').contains("Test.allTheThings() T-Shirt (Red)")
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(2) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(2) > .inventory_item_description').contains("Sauce Labs Onesie")
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(3) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(3) > .inventory_item_description').contains("Sauce Labs Fleece Jacket")
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(4) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(4) > .inventory_item_description').contains("Sauce Labs Bolt T-Shirt")
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(5) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(5) > .inventory_item_description').contains("Sauce Labs Bike Light")
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(6) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(6) > .inventory_item_description').contains('Sauce Labs Backpack')
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")

    // COMPROBAR DE MENOR PRECIO A MAYOR PRECIO
    cy.get('[data-test="product_sort_container"]').select(2)


    cy.get(':nth-child(1) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(1) > .inventory_item_description').contains("Sauce Labs Onesie")
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(2) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(2) > .inventory_item_description').contains("Sauce Labs Bike Light")
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(3) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(3) > .inventory_item_description').contains("Sauce Labs Bolt T-Shirt")
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(4) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(4) > .inventory_item_description').contains("Test.allTheThings() T-Shirt (Red)")
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(5) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(5) > .inventory_item_description').contains('Sauce Labs Backpack')
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(6) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(6) > .inventory_item_description').contains("Sauce Labs Fleece Jacket")
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")

    // COMPROBAR DE MAYOR PRECIO A MENOR PRECIO
    cy.get('[data-test="product_sort_container"]').select(3)


    cy.get(':nth-child(1) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(1) > .inventory_item_description').contains("Sauce Labs Fleece Jacket")
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(2) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(2) > .inventory_item_description').contains('Sauce Labs Backpack')
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(3) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(3) > .inventory_item_description').contains("Sauce Labs Bolt T-Shirt")
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(4) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(4) > .inventory_item_description').contains("Test.allTheThings() T-Shirt (Red)")
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(5) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(5) > .inventory_item_description').contains("Sauce Labs Bike Light")
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")

    cy.get(':nth-child(6) > .inventory_item_description').should("be.visible")
    cy.get(':nth-child(6) > .inventory_item_description').contains("Sauce Labs Onesie")
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")
  })

  it('Validar precio y descripción de los productos', () => {
    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()

    // ITEM 1
    cy.get('#item_4_img_link > .inventory_item_img').should("be.visible")
    cy.get('#item_4_title_link > .inventory_item_name').should("be.visible")
    cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should("be.visible")
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should("be.visible")
    // ITEM 2
    cy.get('#item_0_img_link > .inventory_item_img').should("be.visible")
    cy.get('#item_0_title_link > .inventory_item_name').should("be.visible")
    cy.get(':nth-child(2) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should("be.visible")
    cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should("be.visible")
    // ITEM 3
    cy.get('#item_1_img_link > .inventory_item_img').should("be.visible")
    cy.get('#item_1_title_link > .inventory_item_name').should("be.visible")
    cy.get(':nth-child(3) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should("be.visible")
    cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price').should("be.visible")
    // ITEM 4
    cy.get('#item_5_img_link > .inventory_item_img').should("be.visible")
    cy.get('#item_5_title_link > .inventory_item_name').should("be.visible")
    cy.get(':nth-child(4) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should("be.visible")
    cy.get(':nth-child(4) > .inventory_item_description > .pricebar > .inventory_item_price').should("be.visible")
    // ITEM 5
    cy.get('#item_2_img_link > .inventory_item_img').should("be.visible")
    cy.get('#item_2_title_link > .inventory_item_name').should("be.visible")
    cy.get(':nth-child(5) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should("be.visible")
    cy.get(':nth-child(5) > .inventory_item_description > .pricebar > .inventory_item_price').should("be.visible")
    // ITEM 6
    cy.get('#item_3_img_link > .inventory_item_img').should("be.visible")
    cy.get('#item_3_title_link > .inventory_item_name').should("be.visible")
    cy.get(':nth-child(6) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should("be.visible")
    cy.get(':nth-child(6) > .inventory_item_description > .pricebar > .inventory_item_price').should("be.visible")
  })

  it('Validar descripción ampliada de productos', () => {

    cy.get('.login_logo').should("be.visible")
    cy.get('.bot_column').should("be.visible")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').should("be.visible")
    cy.get('[data-test="login-button"]').click()

    // CLICK EN EL NOMBRE DEL PRODUCTO
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.app_logo').should("be.visible")
    cy.get('[data-test="back-to-products"]').should("be.visible")
    cy.get('.inventory_details_img').should("be.visible")
    cy.get('.inventory_details_desc_container').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("be.visible")
    cy.get('.shopping_cart_link').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').contains('1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="back-to-products"]').click()

    // CLICK EN LA IMAGEN DEL PRODUCTO
    cy.get('#item_4_img_link > .inventory_item_img').click()
    cy.get('.app_logo').should("be.visible")
    cy.get('[data-test="back-to-products"]').should("be.visible")
    cy.get('.inventory_details_img').should("be.visible")
    cy.get('.inventory_details_desc_container').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("be.visible")
    cy.get('.shopping_cart_link').should("be.visible")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').contains('1')
  })

})