source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "coffee-rails", "~> 4.2"
gem "devise"
gem "dotenv-rails"
gem "ffaker"
gem "jbuilder", "~> 2.5"
gem "pg", ">= 0.18", "< 2.0"
gem "pg_search"
gem "pry"
gem "puma", "~> 3.7"
gem "rails", "~> 5.2.2"
gem "rubocop-rails"
gem "sass-rails", "~> 5.0"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"
gem "webpacker"

group :development, :test do
  # Adds support for Capybara system testing and selenium driver
  gem "capybara", "~> 2.13"
  gem "factory_bot_rails"
  gem "rspec-rails"
  gem "selenium-webdriver"
  gem "shoulda-matchers"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "bullet"
  gem "codecov", :require => false
  gem "database_cleaner"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
