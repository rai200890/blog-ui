build: down
	docker-compose build

run: down
	docker-compose up --build

down:
	docker-compose down -v

shell: down
	docker-compose run app sh
