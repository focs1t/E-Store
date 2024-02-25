package ru.dao;

import ru.models.Product;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    private static int PRODUCT_COUNT;
    private static final String URL = "jdbc:postgresql://localhost:5432/e-store";
    private static final String USERNAME = "postgres";
    private static final String PASSWORD = "postgres";
    private static Connection connection;

    static {
        try {
            connection = DriverManager.getConnection(URL,USERNAME, PASSWORD);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    public List<Product> index(){
        List<Product> products = new ArrayList<>();
        try{
            Statement statement = connection.createStatement();
            String SQL = "SELECT * FROM Person";
            ResultSet resultSet = statement.executeQuery(SQL);

            while(resultSet.next()){
                Product product = new Product();
                product.setId(resultSet.getInt("id"));
                product.setName(resultSet.getString("name"));
                product.setDescription(resultSet.getString("description"));

                products.add(product);
            }

        }catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return products;
    }
    public void save(Product product){
        try{
            Statement statement = connection.createStatement();
            String SQL = "INSERT ";
            ResultSet resultSet = statement.executeQuery(SQL);


        }catch (SQLException throwables){
            throwables.printStackTrace();
        }
    }

}
