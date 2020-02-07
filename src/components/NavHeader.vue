<template>
	<v-app-bar
		app
		color="white"
		flat
		>
		<div class="d-flex align-center">

			<div>
				<router-link to='/' class="links">
					<span id="logo" class="linkTitle">Introfolio</span>
				</router-link>
			</div>
		</div>

		<v-spacer></v-spacer>

		<v-btn v-for="(item, index) in items" :key="index" text>
			<router-link class="links" v-bind:to=item.path>
				<span class="linkTitle">{{ item.title }}</span>
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
		text-decoration: none;
		vertical-align: middle;
		padding: 0.5rem 0.5rem;
		border-radius: 5px;
		transition: 5ms;
	}
	.links:hover {
		background-color: rgb(245, 245, 245);
	}
	.linkTitle {
		color: #4A4A4A;
		transform: 5ms;
	}
</style>