<template>
    <div class="flex flex-col pt-[16px] pb-[61px] space-y-[41px]">
        <div class="space-y-[18px]">
            <div class="flex flex-col w-full space-y-[14px]">
                <label for="username" class="text-white">Full Name</label>
                <input type="text" name="username"
                    class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-full h-[65px] text-2xl px-9">
            </div>
            <div class="flex flex-col w-full space-y-[14px]">
                <label for="username" class="text-white">Date of birth</label>
                <div class="flex items-center space-x-[51px]">
                    <input type="text" name="day"
                        class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-[110px] h-[65px] text-center text-2xl placeholder-white/10 font-bold px-5"
                        maxlength="2" placeholder="DD">
                    <input type="text" name="month"
                        class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-[110px] h-[65px] text-center text-2xl placeholder-white/10 font-bold px-5"
                        maxlength="2" placeholder="MM">
                    <input type="text" name="year"
                        class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-[110px] h-[65px] text-center text-2xl placeholder-white/10 font-bold px-5"
                        maxlength="4" placeholder="YY">
                </div>
            </div>
            <div class="flex flex-col w-full space-y-[14px]">
                <label for="username" class="text-white">Create Username</label>
                <input type="text" name="username"
                    class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-full h-[65px] text-2xl px-9 placeholder-white/10"
                    placeholder="@jollofmusicng">
            </div>
            <div class="flex flex-col mt-9 space-y-[14px]">
                <label for="password" class="text-white">Choose Password</label>
                <input type="password" name="password"
                    class="bg-blue-deep-200 rounded-lg border-0 focus:ring-transparent focus:border-0 text-white w-full h-[65px] text-2xl px-9">
            </div>
        </div>

        <div class="mx-auto">
            <button @click="$router.push({ name: 'auth.profile.interests' })"
                class="bg-yellow py-[19.5px] px-[87px] font-medium text-2xl rounded-md">
                Sign up
            </button>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center space-y-[34px]">

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