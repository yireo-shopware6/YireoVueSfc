# Vue SFC for Shopware 6 Administration

## Usage
Install this plugin via composer:
```bash
composer require yireo/shopware6-vue-sfc:@dev
```

Activate the plugin in Shopware:
```bash
bin/console plugin:refresh
bin/console plugin:install --activate YireoVueSfc
```

Install the NPM dependencies:
```bash
cd vendor/yireo/shopware6-vue-sfc/src/Resources/app/administration/
yarn install
```

Rebuild the Administration:
```bash
bin/build-administration.sh
PORT=8080 bin/watch-administration.sh
```

Post a GitHub Issue if things are not working properly.
