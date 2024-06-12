<script setup lang="ts">
	const liveChat = useLiveChat();

	onMounted(() => {
		if (process.client) {
			liveChat.loadChatraScript();
		}
	});
	const loaded = useCookie<boolean>("reload", { maxAge: 60 * 60 * 24 });
	loaded.value = false;
</script>

<template>
	<div>
		<slot />
	</div>
</template>
