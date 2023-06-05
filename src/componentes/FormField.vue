
<script setup>
    import {defineProps, defineEmits, ref, watch, defineExpose} from "vue";

    const { field } = defineProps(["field"]);
    const emit = defineEmits(["userInput"]);
    const user_input = ref("");
    const show_error = ref(false);
    const error = ref("");

    error.value = field.validate(user_input.value)
    watch(user_input, () => {
        emit("userInput",  [field.name, user_input.value]);
        error.value = field.validate(user_input.value)
    });

    defineExpose({user_input, show_error, field, error} );

</script>

<template>
    <main>
        <div class="form-field">
            <div class="label">
                <text class="label-text">{{field.label}}</text>
                <text class="error" v-if="show_error" :style="{opacity : 1}">{{field.validate(user_input)}}</text>
                <text class="error" v-else :style="{opacity : 0}">place</text>
            </div>
            <input v-if="Object.keys(field).includes('mask') " v-model="user_input" :placeholder="field.placeholder" :type="field.type" v-mask="field.mask"/>
            <input v-else v-model="user_input" :placeholder="field.placeholder" :type="field.type"/>
        </div>
    </main>
</template>

<style scoped>
    .form-field{
        margin-bottom: 5px;
    }

    .label{
        display: flex;
        margin: 0px;
        padding: 0px;
        justify-content: space-between;
        margin-top: 10px;
        
    }
    .label .label-text{
        font-size: 10px;
        color: black;
        opacity: 1;
        
    }
    .label .error {
        color: red;
        font-size: 7px;
    }
    .form-field input{
        width: 100%;
        padding-left: 3px;
        box-sizing: border-box;
        
    }
    input{
        font-size: 0.5em;
        padding: 8px 0px;
        margin-bottom: -5px;
    }

</style>
