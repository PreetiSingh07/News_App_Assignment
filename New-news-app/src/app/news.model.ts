import { Component } from '@angular/core';

export class News{
	constructor(
			public id:string, public name:string, public description:string,
			public url:string, public country:string
		){}
}