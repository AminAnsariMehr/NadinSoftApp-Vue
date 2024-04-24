<template>

    <div class="profilePage" id="profilePage">
        <form class="profilePage__settingsForm" id="profileForm">
            <h3 class="profilePage__title">Profile Setting</h3>

            <div class="profilePage__UserSection">
                <div class="profilePage__userOptions">
                    <section class="profilePage__renameWrapper">
                        <label class="profilePage__renameLabel">User name</label>
                        <input type="text" class="profilePage__renameInput" id="renameInput" autocomplete="off" />
                    </section>

                    <section class="profilePage__userAvatarWrapper">
                        <label class="profilePage__avatarLabel">Avatar</label>
                        <div class="profilePage__inputLogoWrapper">
                            <p class="profilePage__avatarImageQuestion" id="profileAvatarQuestion">
                                Would you like to upload your avatar?
                            </p>
                            <label class="profilePage__avatarUrlLabel" id="profileUrlLabel">Use a custom image...</label>
                            <input type="text" class="profilePage__avatarUrlInput" id="profileAvatarUrlInput" />
                            <i class="fa-regular fa-xmark profilePage__avatarCloseIcon" id="avatarUrlCloseIcon"></i>
                        </div>
                    </section>

                    <section class="profilePage__themeWrapper">
                        <h3 class="profilePage__themeTitle">Theme switch</h3>

                        <div class="profilePage__userThemeBtnWrapper" id="themeSwitcher">
                            <i class="fa-solid fa-sun profilePage__userThemeSunIcon"></i>
                            <i class="fa-solid fa-moon profilePage__userThemeMoonIcon"></i>
                        </div>
                    </section>

                    <button class="profilePage__saveSettingBtn GlassMorphism__Button GlassMorphism__Button--Color2" id="saveSettingBtn">
                        <span class="GlassMorphism__LightSpan GlassMorphism__LightSpan--saveSetting">Save</span>
                    </button>
                </div>

                <div class="profilePage__userData">
                    <div class="profilePage__avatarFrame">
                        <img class="profilePage__avatarImage" src="./assets/decorations/male.png" id="userAvatarImage" />
                    </div>
                    <p class="profilePage__usernameDisplay" id="profileUserNameDisplay"></p>
                    <i class="fa-regular fa-mars profilePage__userGenderIcon" id="userGenderIcon"></i>
                </div>
            </div>
        </form>
    </div>

</template>
