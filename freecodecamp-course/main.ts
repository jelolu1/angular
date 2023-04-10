enum Color {
	Blue,
	Red,
}

interface human {
	name: string;
	age: number;
	favColor: Color;
}

const me: human = {
	name: 'Jesus',
	age: 25,
	favColor: Color.Blue,
};

console.log(me);

interface employee extends human {
	company: string;
}

const human1: employee = {
	name: 'Jesus',
	age: 25,
	favColor: Color.Blue,
	company: 'Siemens',
};
