# Fortius API

## Technologies

| Name                                                                                                                   | Version |
| ---------------------------------------------------------------------------------------------------------------------- | ------- |
| PHP                                                                                                                    | 8.1     |
| MYSQL                                                                                                                  | 8       |
| Laravel                                                                                                                | 10      |
| [Laravel Permission](https://github.com/spatie/laravel-permission/tree/9b02e54c2b3aa009128b0df3099fb808fa36b85c)       | 6       |
| [Laravel Query Builder](https://github.com/spatie/laravel-query-builder/tree/93edc4ccd7335205ee088b86a99e6ea834058b9d) | 5       |

<hr/>

## Prerequisites

| Name     | Version |
| -------- | ------- |
| PHP      | 8.1     |
| Composer | 2.6     |
| Docker   | 24      |

## Installation

```bash
composer update
./vendor/bin/sail up
./vendor/bin/sail artisan migrate:fresh --seed
./vendor/bin/sail artisan passport:client --personal --name backoffice
```

## Configuration

###### API URL
http://localhost

###### DB URI
`mysql://localhost:3306`

###### DB Username
`root`

###### DB Username
*None*

###### DB Name
`api_server`

![hr](https://user-images.githubusercontent.com/39755201/159233055-3bd55a37-7284-46ad-b759-5ab0c13b3828.png)

Written from scratch by [@lamualfa](https://lamualfa.co/)
