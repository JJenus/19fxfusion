<script setup lang="ts">
	const props = defineProps<{ customClass?: string }>();

	const user = userData().data;

	const userBalance = () => {
		const money = user.value.balance;

		return useAppSettings().money(money, true);
	};
</script>

<template>
	<div>
		<span :class="customClass">
            {{ userBalance() }}
        </span>
	</div>
</template>
