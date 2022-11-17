export enum Role {
  USER,
  ADMIN = 'ADMIN',
}

export enum Sex {
  MALE,
  FEMALE,
  OTHERS,
}

export const userSeed = [
  {
    document: '00000000000',
    name: 'admin',
    last_name: 'last_name',
    user_name: 'admin',
    password: 'admin',
    birth_date: null,
    celphone: '289999999',
    email: 'admin@hotmail.com',
    cep: '000.000-00',
    state: 'STATE',
    city: 'CITY',
    neighborhood: 'NEIGHBORHOOD',
    address: 'ADDRESS',
    address_number: 'ADDRESS_NUMBER',
    address_complement: 'ADDRESS_COMPLEMENT',
    active: true,
    //sex_type: Sex.MALE,
    //role: Role.ADMIN,
  },
  {
    document: '00000000001',
    name: 'user',
    last_name: 'last_name',
    user_name: 'user',
    password: 'user',
    birth_date: null,
    celphone: '289999999',
    email: 'user@hotmail.com',
    cep: '000.000-00',
    state: 'STATE',
    city: 'CITY',
    neighborhood: 'NEIGHBORHOOD',
    address: 'ADDRESS',
    address_number: 'ADDRESS_NUMBER',
    address_complement: 'ADDRESS_COMPLEMENT',
    active: true,
    //sex_type: Sex.OTHERS,
    //role: Role.USER,
  },
];
