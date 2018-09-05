# README

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|string|

### Association
- belongs_to :user
- blongs_to :group

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|

### Association
- has_many :groups, through: :users_groups
- has_many :users_groups
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, foreign_key: true|
|member|text|null: false, foreign_key: true|

### Association
- has_many :users, through: :users_groups
- has_many :users_groups
- has_many :messages

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
