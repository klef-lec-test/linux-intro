# git clone https://github.com/haru-0205/timetable-frontend-next
echo "メールアドレスを入力してください"
read email
git config --global user.email $email
echo "ユーザー名を入力してください"
read name
git config --global user.name $name
echo "GitHub Access Tokenをペーストしてください"
read accessToken
gh auth login --with-token $accessToken
git fetch
git pull
git checkout develop