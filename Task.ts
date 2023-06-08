import { Cypress } from "cypress";

describe("Profile Creation", () => {
  it("should create a new profile with only First and Last names", () => {
    // Setup login with username and password
    cy.login("testuser", "Test_user1234");

    // Go to the Profiles page
    cy.visit("https://testingtasks.kwentra.com/frontoffice/#/profileslist?tenant_id=59");

    // Click on the "Create New Profile" button
    cy.get("button[data-cy='create-new-profile']").click();

    // Fill out the First and Last name fields
    cy.get("input[data-cy='first-name']").type("Eyad");
    cy.get("input[data-cy='last-name']").type("Hesham");

    // Click on the "Create Profile" button
    cy.get("button[data-cy='create-profile']").click();

    // Verify that the profile was created successfully
    cy.get(".profile-list-item").contains("Eyad Hesham");
  });

  it("should create a new profile with all fields filled out", () => {
    // Login
    cy.login("testuser", "Test_user1234");

    // Go to the Profiles page
    cy.visit("https://testingtasks.kwentra.com/frontoffice/#/profileslist?tenant_id=59");

    // Click on the "Create New Profile" button
    cy.get("button[data-cy='create-new-profile']").click();

    // Fill out all of the fields
    cy.get("input[data-cy='first-name']").type("Eyad");
    cy.get("input[data-cy='last-name']").type("Hesham");
    cy.get("input[data-cy='email']").type("eyadelgbaly@gmail.com");
    cy.get("input[data-cy='phone-number']").type("1234567890");

    // Click on the "Create Profile" button
    cy.get("button[data-cy='create-profile']").click();

    // Verify that the profile was created successfully
    cy.get(".profile-list-item").contains("Eyad Hesham");
  });

  it("should fail to create a new profile with an invalid email address", () => {
    // Login
    cy.login("testuser", "Test_user1234");

    // Go to the Profiles page
    cy.visit("https://testingtasks.kwentra.com/frontoffice/#/profileslist?tenant_id=59");

    // Click on the "Create New Profile" button
    cy.get("button[data-cy='create-new-profile']").click();

    // Fill out the First and Last name fields
    cy.get("input[data-cy='first-name']").type("Eyad");
    cy.get("input[data-cy='last-name']").type("Hesham");
    cy.get("input[data-cy='email']").type("eyadelgbaly@gmail.com");
    cy.get("input[data-cy='phone-number']").type("1234567890");

    // Click on the "Create Profile" button
    cy.get("button[data-cy='create-profile']").click();

    // Verify that the profile creation failed with an error message
    cy.contains("Invalid email address");
  });
});