import psycopg2

def connections():
    con =psycopg2.connect(
        database='postgres',
        user="postgres",
        password="PareS1818",
        host="127.0.0.1",
        port="5432"
    )

    print("Database opened successfully")

