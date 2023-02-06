<template>
    <div class="flex flex-col pt-[107px] pb-[61px]">
        <div>
            <div class="flex flex-col w-full space-y-[14px]">
                <label for="username" class="text-white">Email Address or username</label>
                <input type="text" name="username"
                    class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-full h-[65px] text-2xl px-9">
            </div>
            <div class="flex flex-col mt-9 space-y-[14px]">
                <label for="password" class="text-white">Password</label>
                <input type="password" name="password"
                    class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-full h-[65px] text-2xl px-9">
            </div>

            <div class="flex items-center justify-end pt-[15px] pb-[19px]">
                <span class="text-yellow">
                    Forgot Password?
                </span>
            </div>
        </div>

        <div class="mx-auto">
            <button @click="$router.push({ name: 'auth.signup' })"
                class="bg-yellow py-[19.5px] px-[87px] font-medium text-2xl rounded-md">
                Sign in
            </button>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center space-y-[34px]">
        <span class="text-white text-2xl">or</span>

        <div class="flex items-center space-x-[49px]">
            <span>
                <img src="/images/svg/google.svg" height="33px" width="34px" alt="Google">
            </span>
            <span>
                <img src="/images/svg/facebook.svg" height="33px" width="34px" alt="Facebook">
            </span>
            <span>
                <img src="/images/svg/apple.svg" height="33px" width="34px" alt="Apple">
            </span>
        </div>
    </div>
</template>