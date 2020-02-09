<template>
	<v-app-bar
		app
		color="white"
		flat
		id="grobalHeader"
		>
		<div class="d-flex align-center">

			<div>
				<router-link to='/' class="topLink">
					<span id="logo" class="linkTitle">Introfolio</span>
				</router-link>
			</div>
		</div>

		<v-spacer></v-spacer>

		<span v-for="(item, index) in items" :key="index" text>
			<router-link class="links" v-bind:to=item.path>
				<span class="linkTitle">{{ item.title }}</span>
			</router-link>
		</span>
		<span @click="menuSwitch" id="hamburger">
			<v-icon>mdi-menu</v-icon>
		</span>
		<div class="hamburgerItems">
			<span v-for="(item, index) in items" :key="index">
				<router-link :to="item.path">{{ item.title }}</router-link>
			</span>
		</div>
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
			],
			menuOpen: false
		}
	},
	computed: {
		menuSwitch: function(){
			return !this.menuOpen
		}
	}
	}
</script>

<style scope>
	#logo {
		font-size: 1.5rem;
	}
	.links, .topLink {
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
	#hamburger, .hamburgerItems {
		display: none;
	}


@media (max-width: 768px) {
	.links {
		display: none;
	}
	#hamburger {
		display: block;
		position: fixed;
		right: 1rem;
		padding: 0.5rem;
		border-radius: 50%;
	}
	#hamburger:hover {
		background-color: rgb(245, 245, 245);
	}
	.hamburgerItems {
		display: flex;
		flex-direction: column;
		position: relative;
		top: 3.5rem;
	}
}
</style>