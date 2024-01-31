<template >
    <div>
        {{ charge_title }}
    </div>
</template>
<script lang="ts">
    export default {
        props: [
            'charge_title',
            'modality_type',
            'company_name',
            'location',
            'goals_functions',
            'start_date',
            'end_date'
        ],
        mounted() {
            console.log("TCL: props", this.$props)
        },
    }
</script>
<style >
    
</style>