<script setup>
	const NFTs = ref([
		{ image: "/assets/media/fx/forex-01-1156455991.jpg" },
		{ image: "/assets/media/fx/forex-14-2651231641.jpg" },
		// {
		// 	image: "/assets/media/fx/mastering-forex-trading-1030x687-1775739357.png",
		// },
		{ image: "/assets/media/fx/5c2f430aa48ac1546601226-3625756405.jpeg" },
		{
			image: "/assets/media/fx/speculative-g5de239cb3_1920-1609745559.jpg",
		},
		{ image: "/assets/media/fx/3576491-2489320992.jpg" },
		{ image: "/assets/media/fx/wp4462319-3995300732.jpg" },
		{
			image: "/assets/media/banking/flat-lay-business-concept_53876-24738.jpg",
		},

		{
			image: "/assets/media/banking/man-hand-holding-virtual-world-with-internet-connection-metaverse-global-business-marketing-banking-financial-pass-thru-application-technology-concept_616485-32.jpg",
		},
	]);
</script>

<template>
	<div class=" w-100 ">
		<Swiper
			:modules="[SwiperAutoplay]"
			:space-between="10"
			:loop="true"
			:autoplay="{
				delay: 3000,
				disableOnInteraction: true,
			}"
			class="rounded-3 bg-transparent"
		>
			<SwiperSlide
				v-for="(nft, i) in NFTs"
				:key="i"
				class="rounded-3 bg-transparent "
			>
				<img :src="nft.image" alt="" class="h-250px h-md-300px h-lg-450px w-500px w-lg-900px rounded-3" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
