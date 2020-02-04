<template>
	<v-app-bar
		app
		color="primary"
		dark
		>
		<div class="d-flex align-center">
			<v-img
			alt="Vuetify Logo"
			class="shrink mr-2"
			contain
			src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
			transition="scale-transition"
			width="40"
			/>

			<div>
				<router-link to='/'>
					<span id="logo" class="links">Introfolio</span>
				</router-link>
			</div>
		</div>

		<v-spacer></v-spacer>

		<v-btn v-for="(item, index) in items" :key="index" text>
			<router-link v-bind:to=item.path>
				<span class="links">{{ item.title }}</span>
			</router-link>
		</v-btn>
		</v-app-bar>
</template>

<script>
	export default {
	name: 'NavHeader',
	props: {
	},
	data () {
			return {
				items: [
					{ title: 'About', path: '/about' },
					{ title: 'Works', path: '/works' },
					{ title: 'Contact', path: '/contact' }
				]
			}
		}
	}
</script>

<style scope>
	#logo {
		font-size: 1.5rem;
	}
	.links {
		color: white;
		text-decoration: none;
		vertical-align: middle;
	}
</style>