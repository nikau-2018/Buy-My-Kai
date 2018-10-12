exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          address: '56 Jutland Road',
          city: 'Auckland',
          description: 'Retired keen green finger from the sunny Northshore.',
          email: 'joeb@yahoo.com',
          hash: 'jsahfksfbe839afhap9fdfbsdeih9w',
          hours: '9am - 3pm',
          id: '11101',
          isSeller: '1',
          lat: '-36.8019299',
          long: '174.7766424',
          name: 'Joe Banks',
          suburb: 'Hauraki'
        },
        {
          address: '23 Arthur Crescent',
          city: 'Auckland',
          description: 'Kids have moved out of home so I have lots of produce to share!',
          email: 'mon@gmail.com',
          hash: 'jsahfksfbe839afhap9fdfbsdeih9w',
          hours: 'Saturday 9am - 12pm',
          id: '11102',
          isSeller: '1',
          lat: '-36.7961868',
          long: '174.7806733',
          name: 'Mon Collins',
          suburb: 'Hauraki'
        },
        {
          address: '243 Lake Road',
          city: 'Auckland',
          description: 'Hey! I have a thriving veggie patch and would love to share with the community',
          email: 'dchapman@gmail.com',
          hash: '$argon2id$v=19$m=8,t=2,p=1$SWgDZz8QbOTM9G7vaa+qOQ$s64POjOCRSWBe2+eCl23SfVtQ4NM0eX5KdeXUSl5oHs',
          hours: 'Sundays anytime',
          id: '11103',
          isSeller: '1',
          lat: '-36.80195',
          long: '174.78688',
          name: 'Danny Chapman',
          suburb: 'Belmont'
        },
        {
          address: '32 Egremont Street',
          city: 'Auckland',
          description: 'Passionate about sustainable living, keen to meet other like minded people',
          email: 'sarahj@hotmail.com',
          hash: '$argon2id$v=19$m=8,t=2,p=1$ETKVJJlecmd3SDvtbNcCdA$d2KWLvjS1r7imy1pe/2cTBZIRpMnjRVm/1Ym0rjOraY',
          hours: 'Saturdays all day',
          id: '11104',
          isSeller: '1',
          lat: '-36.80797',
          long: '174.78613',
          name: 'Sarah Jayne',
          suburb: 'Belmont'
        },
        {
          address: '24 Westwell Road',
          city: 'Auckland',
          description: 'Student with a herb garden...',
          email: 'monique.collins@gmail.com',
          hash: '$argon2id$v=19$m=8,t=2,p=1$S1X9smMquXF4K692JdIWLA$zQgX2trFre4WApNmkmq0LT438Vh32K221KgSjl+aP0c',
          hours: 'Saturday Afternoons',
          id: '11105',
          isSeller: '1',
          lat: '-36.80472',
          long: '174.79239',
          name: 'Monique Collins',
          suburb: 'Belmont'
        },
        {
          address: '11 High Street',
          city: 'Auckland',
          description: 'Retired, gardening enthusiast!',
          email: 'dcarter@hotmail.com',
          hash: '$argon2id$v=19$m=8,t=2,p=1$xPreqEgvkiJZ0SnQ1oQ6Iw$ITkFpH/8pw+jGVNiV9Viop25LKqDjUl0VhNDqxg3S+w',
          hours: 'Thursday Mornings',
          id: '11106',
          isSeller: '1',
          lat: '-36.82742',
          long: '174.79537',
          name: 'Douglas Carter',
          suburb: 'Devonport'
        }
      ])
    })
}
