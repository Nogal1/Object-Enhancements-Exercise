describe("createInstructor", function () {
    it("should return an object with firstName and lastName properties", function () {
        const result = createInstructor("John", "Doe");
        expect(result).toEqual({ firstName: "John", lastName: "Doe" });
    });
});

describe("instructor", function () {
    it("should have a firstName and a dynamic property based on favorite number", function () {
        expect(instructor.firstName).toBe("Colt");
        expect(instructor[favoriteNumber]).toBe("That is my favorite!");
    });
});

describe("greetings", function () {
    it("should return a basic greeting with sayHi", function () {
        expect(greetings.sayHi()).toBe("Hi!");
    });

    it("should return a farewell greeting with sayBye", function () {
        expect(greetings.sayBye()).toBe("Colt says bye!");
    });
});

describe("createAnimal", function () {
    const d = createAnimal("dog", "bark", "Woooof!");
    const s = createAnimal("sheep", "bleet", "BAAAAaaaa");

    it("should create an animal object with a species and a method named after the verb that returns a noise", function () {
        expect(d.species).toBe("dog");
        expect(d.bark()).toBe("Woooof!");
        expect(s.species).toBe("sheep");
        expect(s.bleet()).toBe("BAAAAaaaa");
    });
});
