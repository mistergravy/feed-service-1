

const ramsFeed = [{
  id: 1,
  author: 'Lindsey Thiry',
  authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  title: 'Savannah Smiles',
  bigphoto: 'https://s3.us-east-2.amazonaws.com/espn-feed-photos/espn+images/lg5.jpg',
  smallphoto: 'https://s3.us-east-2.amazonaws.com/espn-feed-photos/espn+images/sm5.jpg',
  newsfeed: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Decode this secret message. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Decode this secret message. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Meow',
  videoclip: 'https://www.youtube.com/embed/mYXu1xeiYKA',
}, {
  id: 2,
  author: 'Lindsey Thiry',
  authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  title: 'Where Angels Fear to Tread',
  bigphoto: 'https://res.cloudinary.com/nflclubs/image/private/t_photogallery/f_auto/rams/s3xkzz20uyxilyddap56.jpg',
  smallphoto: 'https://pbs.twimg.com/media/DWrkRMYXUAAp_kZ.jpg',
  newsfeed: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
  videoclip: 'http://sogou.com/amet/sapien/dignissim/vestibulum/vestibulum/ante.js?ut=cursus&blandit=urna&non=ut&interdum=tellus&in=nulla',
}, {
  id: 3,
  author: 'Lindsey Thiry',
  authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  title: 'The Oscar',
  bigphoto: 'https://pbs.twimg.com/media/DmCZM0vVAAY7ipD.jpg',
  smallphoto: 'https://dmt55mxnkgbz2.cloudfront.net/900x0_s3-38441-1s3-38441-W-CA-AP-LA-STADIUM-100.jpg',
  newsfeed: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
  videoclip: 'http://sogou.com/amet/sapien/dignissim/vestibulum/vestibulum/ante.js?ut=cursus&blandit=urna&non=ut&interdum=tellus&in=nulla',
}];

exports.seed = (knex, Promise) => knex('feeds').del()
  .then(() => knex('feeds').insert(ramsFeed));


  //, {
  //   id: 4,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Civil Brand',
  //   bigphoto: 'http://i2.cdn.turner.com/money/dam/assets/160706103824-la-rams-helmets-780x439.jpg',
  //   smallphoto: 'https://i.pinimg.com/236x/2f/9e/be/2f9ebe7c17ace7198b9487ea26bc24fe--nfc-west-logo-images.jpg',
  //   newsfeed: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  //   videoclip: 'http://digg.com/dolor.xml?nullam=pellentesque&porttitor=volutpat&lacus=dui',
  // }, {
  //   id: 5,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Return Of The Ghostbusters',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  //   videoclip: 'https://edublogs.org/nam/congue/risus.jpg?sit=adipiscing&amet=elit&diam=proin&in=risus&magna=praesent&bibendum=lectus&imperdiet=vestibulum&nullam=quam&orci=sapien&pede=varius&venenatis=ut&non=blandit&sodales=non&sed=interdum&tincidunt=in&eu=ante&felis=vestibulum&fusce=ante&posuere=ipsum&felis=primis&sed=in&lacus=faucibus&morbi=orci&sem=luctus&mauris=et&laoreet=ultrices&ut=posuere&rhoncus=cubilia&aliquet=curae&pulvinar=duis&sed=faucibus&nisl=accumsan&nunc=odio',
  // }, {
  //   id: 6,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Shepard & Dark',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  //   videoclip: 'http://yellowpages.com/dolor.xml?dictumst=duis&aliquam=at&augue=velit&quam=eu&sollicitudin=est&vitae=congue&consectetuer=elementum&eget=in&rutrum=hac&at=habitasse&lorem=platea&integer=dictumst&tincidunt=morbi&ante=vestibulum&vel=velit&ipsum=id&praesent=pretium&blandit=iaculis&lacinia=diam&erat=erat&vestibulum=fermentum&sed=justo&magna=nec&at=condimentum&nunc=neque&commodo=sapien&placerat=placerat&praesent=ante&blandit=nulla&nam=justo&nulla=aliquam&integer=quis&pede=turpis&justo=eget&lacinia=elit&eget=sodales&tincidunt=scelerisque&eget=mauris&tempus=sit&vel=amet&pede=eros&morbi=suspendisse&porttitor=accumsan&lorem=tortor&id=quis',
  // }, {
  //   id: 7,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'War Room, The',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  //   videoclip: 'https://artisteer.com/penatibus/et/magnis/dis.jsp?proin=ut&leo=volutpat&odio=sapien&porttitor=arcu&id=sed&consequat=augue&in=aliquam&consequat=erat&ut=volutpat&nulla=in&sed=congue&accumsan=etiam&felis=justo&ut=etiam&at=pretium&dolor=iaculis&quis=justo&odio=in&consequat=hac&varius=habitasse&integer=platea&ac=dictumst&leo=etiam&pellentesque=faucibus&ultrices=cursus&mattis=urna&odio=ut&donec=tellus&vitae=nulla&nisi=ut&nam=erat&ultrices=id&libero=mauris&non=vulputate&mattis=elementum&pulvinar=nullam&nulla=varius&pede=nulla&ullamcorper=facilisi&augue=cras&a=non&suscipit=velit&nulla=nec&elit=nisi&ac=vulputate&nulla=nonummy&sed=maecenas&vel=tincidunt&enim=lacus&sit=at&amet=velit&nunc=vivamus&viverra=vel&dapibus=nulla&nulla=eget&suscipit=eros&ligula=elementum&in=pellentesque&lacus=quisque&curabitur=porta&at=volutpat&ipsum=erat&ac=quisque&tellus=erat&semper=eros&interdum=viverra&mauris=eget&ullamcorper=congue&purus=eget&sit=semper&amet=rutrum&nulla=nulla&quisque=nunc&arcu=purus&libero=phasellus&rutrum=in&ac=felis&lobortis=donec&vel=semper&dapibus=sapien&at=a&diam=libero&nam=nam&tristique=dui&tortor=proin&eu=leo',
  // }, {
  //   id: 8,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Boys Next Door, The',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  //   videoclip: 'https://go.com/congue/elementum/in/hac/habitasse/platea.xml?lacus=blandit&purus=lacinia&aliquet=erat&at=vestibulum&feugiat=sed&non=magna&pretium=at&quis=nunc&lectus=commodo&suspendisse=placerat&potenti=praesent&in=blandit&eleifend=nam&quam=nulla&a=integer&odio=pede&in=justo&hac=lacinia&habitasse=eget&platea=tincidunt&dictumst=eget&maecenas=tempus&ut=vel&massa=pede',
  // }, {
  //   id: 9,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Evil Under the Sun',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
  //   videoclip: 'http://sun.com/ipsum/primis/in.png?felis=quam&ut=pharetra&at=magna&dolor=ac&quis=consequat&odio=metus&consequat=sapien&varius=ut&integer=nunc&ac=vestibulum&leo=ante&pellentesque=ipsum&ultrices=primis&mattis=in&odio=faucibus&donec=orci&vitae=luctus&nisi=et&nam=ultrices&ultrices=posuere&libero=cubilia&non=curae&mattis=mauris&pulvinar=viverra&nulla=diam&pede=vitae&ullamcorper=quam&augue=suspendisse&a=potenti&suscipit=nullam&nulla=porttitor&elit=lacus&ac=at&nulla=turpis&sed=donec&vel=posuere&enim=metus&sit=vitae&amet=ipsum&nunc=aliquam&viverra=non&dapibus=mauris&nulla=morbi&suscipit=non&ligula=lectus&in=aliquam&lacus=sit&curabitur=amet&at=diam&ipsum=in&ac=magna',
  // }, {
  //   id: 10,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Pied Piper, The (Pied Piper of Hamelin, The)',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  //   videoclip: 'http://miibeian.gov.cn/dapibus/duis/at/velit.aspx?velit=non&nec=mattis&nisi=pulvinar&vulputate=nulla&nonummy=pede',
  // }, {
  //   id: 11,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Heroes of Telemark, The ',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
  //   videoclip: 'https://mediafire.com/ante/ipsum/primis.png?odio=sociis&porttitor=natoque&id=penatibus&consequat=et&in=magnis&consequat=dis&ut=parturient&nulla=montes&sed=nascetur&accumsan=ridiculus&felis=mus&ut=vivamus&at=vestibulum',
  // }, {
  //   id: 12,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Mohabbatein',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
  //   videoclip: 'https://sitemeter.com/vestibulum/eget.jpg?nulla=fusce&tempus=posuere&vivamus=felis&in=sed&felis=lacus&eu=morbi&sapien=sem&cursus=mauris&vestibulum=laoreet&proin=ut&eu=rhoncus&mi=aliquet&nulla=pulvinar&ac=sed&enim=nisl&in=nunc&tempor=rhoncus&turpis=dui&nec=vel&euismod=sem&scelerisque=sed&quam=sagittis&turpis=nam&adipiscing=congue&lorem=risus&vitae=semper&mattis=porta&nibh=volutpat&ligula=quam&nec=pede&sem=lobortis&duis=ligula&aliquam=sit&convallis=amet&nunc=eleifend&proin=pede&at=libero&turpis=quis&a=orci&pede=nullam&posuere=molestie&nonummy=nibh&integer=in&non=lectus&velit=pellentesque&donec=at&diam=nulla&neque=suspendisse&vestibulum=potenti&eget=cras&vulputate=in&ut=purus&ultrices=eu&vel=magna&augue=vulputate&vestibulum=luctus&ante=cum&ipsum=sociis&primis=natoque&in=penatibus&faucibus=et&orci=magnis&luctus=dis&et=parturient&ultrices=montes&posuere=nascetur&cubilia=ridiculus&curae=mus&donec=vivamus&pharetra=vestibulum&magna=sagittis&vestibulum=sapien&aliquet=cum&ultrices=sociis&erat=natoque&tortor=penatibus&sollicitudin=et&mi=magnis&sit=dis&amet=parturient&lobortis=montes&sapien=nascetur',
  // }, {
  //   id: 13,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Fever in the Blood, A',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  //   videoclip: 'https://arizona.edu/molestie/lorem/quisque/ut/erat/curabitur.jsp?nisl=in&duis=felis&bibendum=donec&felis=semper&sed=sapien&interdum=a&venenatis=libero&turpis=nam&enim=dui&blandit=proin&mi=leo&in=odio&porttitor=porttitor&pede=id&justo=consequat&eu=in&massa=consequat&donec=ut&dapibus=nulla&duis=sed&at=accumsan&velit=felis&eu=ut&est=at&congue=dolor&elementum=quis&in=odio&hac=consequat&habitasse=varius&platea=integer&dictumst=ac&morbi=leo&vestibulum=pellentesque&velit=ultrices&id=mattis&pretium=odio&iaculis=donec&diam=vitae&erat=nisi&fermentum=nam&justo=ultrices&nec=libero&condimentum=non&neque=mattis&sapien=pulvinar&placerat=nulla&ante=pede&nulla=ullamcorper&justo=augue&aliquam=a&quis=suscipit&turpis=nulla&eget=elit&elit=ac&sodales=nulla&scelerisque=sed&mauris=vel&sit=enim&amet=sit&eros=amet&suspendisse=nunc&accumsan=viverra&tortor=dapibus&quis=nulla&turpis=suscipit&sed=ligula&ante=in&vivamus=lacus&tortor=curabitur&duis=at&mattis=ipsum&egestas=ac&metus=tellus',
  // }, {
  //   id: 14,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Dread',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  //   videoclip: 'https://studiopress.com/risus/dapibus/augue/vel.png?ut=tellus&nulla=nulla&sed=ut&accumsan=erat&felis=id&ut=mauris&at=vulputate&dolor=elementum&quis=nullam&odio=varius&consequat=nulla&varius=facilisi&integer=cras&ac=non&leo=velit&pellentesque=nec&ultrices=nisi&mattis=vulputate&odio=nonummy&donec=maecenas&vitae=tincidunt&nisi=lacus&nam=at&ultrices=velit&libero=vivamus&non=vel&mattis=nulla&pulvinar=eget&nulla=eros&pede=elementum&ullamcorper=pellentesque&augue=quisque&a=porta&suscipit=volutpat&nulla=erat&elit=quisque&ac=erat&nulla=eros&sed=viverra&vel=eget&enim=congue&sit=eget&amet=semper&nunc=rutrum&viverra=nulla&dapibus=nunc&nulla=purus&suscipit=phasellus&ligula=in',
  // }, {
  //   id: 15,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: "Sign 'o' the Times",
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  //   videoclip: 'https://prnewswire.com/elementum/pellentesque/quisque/porta/volutpat/erat/quisque.js?condimentum=lacinia',
  // }, {
  //   id: 16,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Aviator, The',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  //   videoclip: 'https://google.com.au/volutpat/dui/maecenas/tristique/est/et/tempus.html?elementum=cursus&nullam=urna&varius=ut&nulla=tellus&facilisi=nulla&cras=ut&non=erat&velit=id&nec=mauris&nisi=vulputate&vulputate=elementum&nonummy=nullam&maecenas=varius&tincidunt=nulla&lacus=facilisi&at=cras&velit=non&vivamus=velit&vel=nec&nulla=nisi&eget=vulputate&eros=nonummy&elementum=maecenas&pellentesque=tincidunt&quisque=lacus&porta=at&volutpat=velit&erat=vivamus&quisque=vel&erat=nulla&eros=eget&viverra=eros&eget=elementum&congue=pellentesque&eget=quisque&semper=porta&rutrum=volutpat&nulla=erat&nunc=quisque&purus=erat&phasellus=eros&in=viverra&felis=eget&donec=congue&semper=eget&sapien=semper&a=rutrum&libero=nulla&nam=nunc&dui=purus&proin=phasellus&leo=in&odio=felis&porttitor=donec&id=semper&consequat=sapien&in=a&consequat=libero&ut=nam&nulla=dui&sed=proin&accumsan=leo&felis=odio&ut=porttitor&at=id&dolor=consequat&quis=in&odio=consequat&consequat=ut&varius=nulla&integer=sed&ac=accumsan&leo=felis&pellentesque=ut&ultrices=at&mattis=dolor&odio=quis&donec=odio&vitae=consequat&nisi=varius&nam=integer&ultrices=ac&libero=leo&non=pellentesque&mattis=ultrices&pulvinar=mattis&nulla=odio',
  // }, {
  //   id: 17,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'As Tears Go By (Wong gok ka moon)',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  //   videoclip: 'http://cdbaby.com/lacus/morbi/sem.xml?at=tempus&turpis=semper&a=est&pede=quam&posuere=pharetra&nonummy=magna&integer=ac&non=consequat&velit=metus&donec=sapien&diam=ut&neque=nunc&vestibulum=vestibulum&eget=ante&vulputate=ipsum&ut=primis&ultrices=in&vel=faucibus&augue=orci&vestibulum=luctus&ante=et&ipsum=ultrices&primis=posuere&in=cubilia&faucibus=curae&orci=mauris&luctus=viverra&et=diam&ultrices=vitae&posuere=quam&cubilia=suspendisse&curae=potenti&donec=nullam&pharetra=porttitor&magna=lacus&vestibulum=at&aliquet=turpis&ultrices=donec&erat=posuere&tortor=metus&sollicitudin=vitae&mi=ipsum&sit=aliquam&amet=non&lobortis=mauris&sapien=morbi&sapien=non&non=lectus&mi=aliquam&integer=sit&ac=amet&neque=diam&duis=in&bibendum=magna&morbi=bibendum&non=imperdiet&quam=nullam&nec=orci&dui=pede&luctus=venenatis&rutrum=non&nulla=sodales&tellus=sed&in=tincidunt&sagittis=eu&dui=felis&vel=fusce&nisl=posuere&duis=felis&ac=sed&nibh=lacus&fusce=morbi&lacus=sem&purus=mauris&aliquet=laoreet&at=ut&feugiat=rhoncus&non=aliquet&pretium=pulvinar&quis=sed&lectus=nisl&suspendisse=nunc&potenti=rhoncus&in=dui&eleifend=vel&quam=sem&a=sed&odio=sagittis&in=nam&hac=congue&habitasse=risus&platea=semper&dictumst=porta&maecenas=volutpat&ut=quam',
  // }, {
  //   id: 18,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Sea Inside, The (Mar adentro)',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
  //   videoclip: 'https://1688.com/odio/elementum/eu.aspx?integer=est&ac=lacinia&neque=nisi&duis=venenatis&bibendum=tristique&morbi=fusce&non=congue&quam=diam&nec=id&dui=ornare&luctus=imperdiet&rutrum=sapien&nulla=urna&tellus=pretium&in=nisl&sagittis=ut&dui=volutpat&vel=sapien&nisl=arcu&duis=sed&ac=augue&nibh=aliquam&fusce=erat&lacus=volutpat&purus=in&aliquet=congue&at=etiam&feugiat=justo&non=etiam&pretium=pretium&quis=iaculis&lectus=justo&suspendisse=in&potenti=hac&in=habitasse&eleifend=platea&quam=dictumst&a=etiam&odio=faucibus&in=cursus&hac=urna&habitasse=ut&platea=tellus&dictumst=nulla&maecenas=ut&ut=erat&massa=id&quis=mauris&augue=vulputate&luctus=elementum&tincidunt=nullam&nulla=varius&mollis=nulla&molestie=facilisi&lorem=cras&quisque=non&ut=velit&erat=nec&curabitur=nisi&gravida=vulputate&nisi=nonummy&at=maecenas&nibh=tincidunt&in=lacus&hac=at&habitasse=velit&platea=vivamus&dictumst=vel&aliquam=nulla&augue=eget&quam=eros&sollicitudin=elementum&vitae=pellentesque&consectetuer=quisque&eget=porta&rutrum=volutpat&at=erat&lorem=quisque&integer=erat&tincidunt=eros&ante=viverra&vel=eget&ipsum=congue&praesent=eget&blandit=semper&lacinia=rutrum&erat=nulla',
  // }, {
  //   id: 19,
  //   author: 'Lindsey Thiry',
  //   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  //   title: 'Glass Slipper, The',
  //   bigphoto: 'http://www.americanfootballinternational.com/wp-content/uploads/2018/01/NFL-2017-LA-Rams-Rams-running-back-Todd-Gurley-breaks-away-from-two-Colts-defenders-to-pick-up-yards-on-Sept.-10.-Wally-Skalij-Los-Angeles-Times-620x400.png',
  //   smallphoto: 'https://cdns.abclocal.go.com/content/wpvi/images/cms/2751521_1280x720.jpg',
  //   newsfeed: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  //   videoclip: 'http://behance.net/lectus/suspendisse/potenti/in.js?enim=in&lorem=faucibus&ipsum=orci&dolor=luctus&sit=et&amet=ultrices&consectetuer=posuere&adipiscing=cubilia&elit=curae&proin=duis&interdum=faucibus&mauris=accumsan&non=odio&ligula=curabitur&pellentesque=convallis&ultrices=duis&phasellus=consequat&id=dui&sapien=nec&in=nisi&sapien=volutpat&iaculis=eleifend&congue=donec&vivamus=ut&metus=dolor&arcu=morbi&adipiscing=vel&molestie=lectus&hendrerit=in&at=quam&vulputate=fringilla&vitae=rhoncus&nisl=mauris&aenean=enim&lectus=leo&pellentesque=rhoncus&eget=sed&nunc=vestibulum&donec=sit&quis=amet&orci=cursus&eget=id&orci=turpis&vehicula=integer&condimentum=aliquet&curabitur=massa&in=id&libero=lobortis&ut=convallis&massa=tortor&volutpat=risus&convallis=dapibus&morbi=augue&odio=vel&odio=accumsan&elementum=tellus&eu=nisi&interdum=eu&eu=orci&tincidunt=mauris&in=lacinia&leo=sapien&maecenas=quis&pulvinar=libero&lobortis=nullam&est=sit&phasellus=amet&sit=turpis&amet=elementum&erat=ligula&nulla=vehicula&tempus=consequat&vivamus=morbi&in=a&felis=ipsum&eu=integer&sapien=a&cursus=nibh&vestibulum=in&proin=quis&eu=justo&mi=maecenas&nulla=rhoncus&ac=aliquam&enim=lacus&in=morbi&tempor=quis',
  // }