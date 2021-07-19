'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'NashvilleFoodProject',
        email: 'info@thenashvillefoodproject.org',
        imgUrl: 'https://images.squarespace-cdn.com/content/v1/53ecdafde4b07f0225df2a99/1448486853932-1KK42L09CVCF49PZYFDM/NFP_Stacked_wColorIcons_SOCIAL.jpg',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        username:'StLukes',
        email: 'info@stlch.org',
        imgUrl: 'https://images.squarespace-cdn.com/content/v1/573c94d1044262796cc9c98d/f39fa4d6-e0ed-42f8-a932-a8e4a1a9ad2c/PNG+St.+Luke%27s+Logo+Color+%28Web%29+Signature+-+Edited+Red+-+Copy+-+Copy.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'DiaperConnection',
        email: 'carey.morgan@nashvillediaperconnection.org',
        imgUrl: 'https://pbs.twimg.com/profile_images/506875974571409408/0x8PJdx0_400x400.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'NeedLink',
        email: 'lawills@needlink.org',
        imgUrl: 'https://scontent.faus1-1.fna.fbcdn.net/v/t1.6435-9/84014297_2771113739635004_2457610510456061952_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dz5x7v3UCxsAX98eaEn&_nc_ht=scontent.faus1-1.fna&oh=b584b92a8855071a45c797564269ac7c&oe=60FB0FF4',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'GideonsArmy',
        email: 'gideonsarmyunited.org',
        imgUrl: 'https://scontent.faus1-1.fna.fbcdn.net/v/t1.6435-9/117353296_10157497965853034_5283466619395196263_n.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jcHCEyXzlNEAX9_XxOp&_nc_ht=scontent.faus1-1.fna&oh=bf44a9f7a37556eb27f9f4a4ccef5892&oe=60FB9CD6',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'PENCIL',
        email: 'info@pencil615.org',
        imgUrl: 'https://scontent.faus1-1.fna.fbcdn.net/v/t1.18169-9/13895499_10154359164543180_5634514646774582135_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=c0UCae-pGtcAX8QjSIi&_nc_ht=scontent.faus1-1.fna&oh=3b4b93474bc61e26841127763f3a53ba&oe=60FA43DF',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'NashvilleCARES',
        email: 'info@nashvillecares.org',
        imgUrl: 'https://c.na158.content.force.com/servlet/servlet.ImageServer?id=015A0000002M8XrIAK&oid=00DA00000009smOMAQ',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'AliveHospice',
        email: 'info@alivehospice.org',
        imgUrl: 'https://www.alivehospice.org/wp-content/themes/alive-hospice/assets/img/alive-mark-large.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'BookEm',
        email: 'books@bookem-kids.org',
        imgUrl: 'https://bookem-kids.org/wp-content/uploads/2019/05/logo2.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'DismasHouse',
        email: 'info@dismas.org',
        imgUrl: 'https://www.dismas.org/App_Themes/dismas/images/logo.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'NashvilleHumane',
        email: 'volunteer@nashvillehumane.org',
        imgUrl: 'https://nashvillehumane.org/wp-content/uploads/2019/10/NashHumane_cleanLogo.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'NICE',
        email: 'information@empowernashville.org',
        imgUrl: 'https://www.empowernashville.org/wp-content/uploads/2014/09/resettlement.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'Oasis',
        email: 'dtrue@oasiscenter.org',
        imgUrl: 'https://parthenonpub.com/assets/2016/09/Oasis-Center-Logo.jpeg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'SecondHarvest',
        email: 'info@secondharvestmidtn.org',
        imgUrl: 'https://s3.amazonaws.com/nashvillechamber.com/P2020-Investor-logos/second-harvest-2016.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'TJFON',
        email: 'director@tnjfon.org',
        imgUrl: 'https://images.squarespace-cdn.com/content/59e8b663a8b2b05dc4db5108/1567615588238-9WIK7ADJLZYHRPY5EVZ2/JFON_logo_transparent.png?content-type=image%2Fpng',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'GlencliffVillage',
        email: 'robb@villageatglencliff.org',
        imgUrl: 'https://opentablenashville.org/wp-content/uploads/2017/03/VILLAGE-LOGO.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'TurnipGreen',
        email: 'info@turnipgreencreativereuse.org',
        imgUrl: 'https://images.squarespace-cdn.com/content/5cc102117d0c91632bc77882/1577734716897-71OUZXUH3BVLZGSHMTE8/TGCR_Logo_Horizontal_Padding_TopNBottomSides_FINAL.png?format=1500w&content-type=image%2Fpng',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username:'demo',
        email: 'demo@demo.com',
        imgUrl: 'https://tinyurl.com/nrm7bfpt',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
