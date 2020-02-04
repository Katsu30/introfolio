<template>
	<nav id='nav-bar'>
		<div id='header-left'>
			{{ logo.name }}
		</div>
		<div id="header-right">
			<ol>
				<li v-for="(item, index) in menu" :key=index class="list-items">
					{{ item.title }}
				</li>
			</ol>
		</div>
	</nav>
</template>


<script>
	export default {
		name: 'NavHeader',
		data () {
			return {
				logo: {
					name: 'Portfolio'
				},
				menu: [
					{title: 'Top', path: '/'},
					{title: 'About', path: '/about'},
					{title: 'Works', path: '/works'},
					{title: 'Contact', path: '/contact'}
				],
			}
		}
	}
</script>

<style scope>
	#nav-bar {
		height: 60px;
		width: 100%;
		position: fixed;
		top: 0;
		background-color: lightblue;
	}
	.header-left {
		position: relative;
		left: 1rem;
	}
	.list-items {
		list-style-type: none;
	}
</style>