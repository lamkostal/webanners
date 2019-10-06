	new Vue({
		el: '#works',
		data: {
			email: null,
			message: 'Hello',
			banners: [{
					name: 'CFmoto-MT650',
					visible: false,
					description: 'Created for CFMOTO new bike series 650MT, launched in 2018',
					link: "https://www.cfmoto.gr",
				year:'2018'
					},
				{
					name: 'Kawasaki-VersysX300',
					visible: false,
					description: 'Created for Kawasaki greece new Versys300 model',
					link: "https://www.kawasaki.gr",
					year:'2017'
					},
				{
					name: 'Brixton-BX125',
					visible: false,
					description: 'Created for Brixton-motorcycles first appearance in the greek market with their new BX125 bikes',
					link: "https://www.brixton-motorcycles.gr",
					year:'2017'
					},
				{
					name: 'Peugeot-Belville',
					visible: false,
					description: 'Creative for the new Belville bike by Peugeot scooters',
					link: "https://www.peugeot.gr",
					year:'2018'
					},
				{
					name: 'Kawasaki-offerZ',
					visible: false,
					description: 'Created for Kawasaki greece special offers for some bikes of the z and ninja seires',
					link: "https://www.kawasaki.gr",
					year:'2018'
					},
				{
					name: 'Kawasaki-zFamilly',
					visible: false,
					description: 'Created for Kawasaki greece  z-familly bike series',
					link: "https://www.kawasaki.gr",
					year:'2017'
					},
				{
					name: 'ggFragioudaki',
					visible: false,
					description: 'Created, for a local book and stationary business',
					link: "",
					year:'2018'
					},
				{
					name: 'Peugeot-Tweet',
					visible: false,
					description: 'An older creative for the Tweet scooter by Peugeot',
					link: "https://www.peugeot.gr",
					year:'2016'
					},
				{
					name: 'Kawasaki-Versys650offer',
					visible: false,
					description: 'Creative for a special offer regarding Versys650 model',
					link: "https://www.kawasaki.gr",
					year:'2017'
					}

				]

		},
	

	});
	new Vue({
		el:"#con_form",
		data:{
			email:null
		},
		methods:{
			validEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			  },
			alertInputEmail(){
				if(this.email && !this.validEmail(this.email)){
					return true;
				}
			},
		
			
		}
	});
