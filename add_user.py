import psycopg2

con =psycopg2.connect(
    database='postgres',
    user="postgres",
    password="PareS1818",
    host="127.0.0.1",
    port="5432"
    )
    
print("Database opened successfully")

cur = con.cursor()
cur.execute("INSERT INTO STUDENT(ADMISSION,NAME,AGE,COURSE,DEPARTMENT) VALUES (3421, 'John', 18, 'Computer Science', 'ICT')"
)
con.commit()
print("Record inserted successfully")

con.close()